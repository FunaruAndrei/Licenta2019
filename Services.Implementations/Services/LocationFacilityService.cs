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
    public class LocationFacilityService:ILocationFacilityService
    {
        private readonly IMapper _mapper;
        private readonly IServiceLocationFacilityRepository _facilityRepository;

        public LocationFacilityService(
            IMapper mapper,
            IServiceLocationFacilityRepository facilityRepository)
        {
            _mapper = mapper;
            _facilityRepository = facilityRepository;
        }
        public async Task<IEnumerable<ServiceLocationFacilityViewModel>> GetByLocationId(int locationId)
        {
            return _mapper.Map<IEnumerable<ServiceLocationFacility>, IEnumerable<ServiceLocationFacilityViewModel>>(
                await _facilityRepository.WhereAsync(e => e.ServiceLocationId == locationId));
        }

        public async Task<ServiceLocationFacilityViewModel> GetById(int id)
        {
            return _mapper.Map<ServiceLocationFacility, ServiceLocationFacilityViewModel>(
                await _facilityRepository.GetById(id));
        }

        public async Task<int> AddServiceFacility(ServiceLocationFacilityViewModel entity)
        {
            return await _facilityRepository.Insert(
                _mapper.Map<ServiceLocationFacilityViewModel, ServiceLocationFacility>(entity));
        }

        public async Task<bool> DeleteServiceFacility(int servLocFacilityId)
        {
            var ent = await _facilityRepository.GetById(servLocFacilityId);
            return await _facilityRepository.Delete(ent);
        }
    }
}
