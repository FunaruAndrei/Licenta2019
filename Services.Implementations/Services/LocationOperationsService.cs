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
    public class LocationOperationsService:ILocationOperationsService
    {
        private readonly IMapper _mapper;
        private readonly IServiceLocationOperationRepository _opertationRepository;

        public LocationOperationsService(
            IMapper mapper,
            IServiceLocationOperationRepository opertationRepository)
        {
            _mapper = mapper;
            _opertationRepository = opertationRepository;
        }
        public async Task<IEnumerable<ServiceLocationOperationViewModel>> GetByLocationId(int locationId)
        {
            return _mapper.Map<IEnumerable<ServiceLocationOperation>, IEnumerable<ServiceLocationOperationViewModel>>(
                await _opertationRepository.WhereAsync(e => e.ServiceLocationId == locationId));
        }

        public async Task<ServiceLocationOperationViewModel> GetById(int id)
        {
            return _mapper.Map<ServiceLocationOperation, ServiceLocationOperationViewModel>(
                await _opertationRepository.GetById(id));
        }

        public async Task<int> AddServiceOperation(ServiceLocationOperationViewModel entity)
        {
            return await _opertationRepository.Insert(
                _mapper.Map<ServiceLocationOperationViewModel, ServiceLocationOperation>(entity));
        }

        public async Task<bool> DeleteServiceOperation(int servLocContactId)
        {
            var ent = await _opertationRepository.GetById(servLocContactId);
            return await _opertationRepository.Delete(ent);
        }

        public async Task<bool> EditServiceOperation(ServiceLocationOperationViewModel entity, int id)
        {
            var ent = await _opertationRepository.GetById(id);
            if (ent != null)
            {
                ent.Time = entity.Time;
                ent.Price = entity.Price;

                return await _opertationRepository.Update(ent);
            }
            else
            {
                return await Task.FromResult(false);
            }
        }
    }
}
