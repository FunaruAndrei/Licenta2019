using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Domain.IRepostories.ServiceLocationRepositories;
using Domain.Models.Services;
using Services.Models.ServicesModels;
using Services.Services;

namespace Services.Implementations.Services
{
    public class LocationProgramService:ILocationProgramService
    {
        private readonly IMapper _mapper;
        private readonly IServiceLocationProgramRepository _programRepository;

        public LocationProgramService(
            IMapper mapper,
            IServiceLocationProgramRepository programRepository)
        {
            _mapper = mapper;
            _programRepository = programRepository;
        }
        public async Task<IEnumerable<ServiceProgramViewModel>> GetByLocationId(int locationId)
        {
            return _mapper.Map<IEnumerable<ServiceProgram>, IEnumerable<ServiceProgramViewModel>>(
                await _programRepository.WhereAsync(e => e.ServiceLocationId == locationId));
        }

        public async Task<ServiceProgramViewModel> GetById(int id)
        {
            return _mapper.Map<ServiceProgram, ServiceProgramViewModel>(
                await _programRepository.GetById(id));
        }

        public async Task<int> AddServiceProgram(ServiceProgramViewModel entity)
        {
            return await _programRepository.Insert(
                _mapper.Map<ServiceProgramViewModel, ServiceProgram>(entity));
        }

        public async Task<bool> DeleteServiceProgram(int servLocFacilityId)
        {
            var ent = await _programRepository.GetById(servLocFacilityId);
            return await _programRepository.Delete(ent);
        }

        public async Task<bool> EditServiceProgramAsync(ServiceProgramViewModel entity, int id)
        {
            var ent = await _programRepository.GetById(id);
            if (ent !=null)
            {
                ent.OpenHour = entity.OpenHour;
                ent.OpenMinute = entity.OpenMinute;
                ent.CloseHour = entity.CloseHour;
                ent.CloseMinute = entity.CloseMinute;

                return await _programRepository.Update(ent);
            }
            else
            {
                return await Task.FromResult(false);
            }
        }
    }
}
