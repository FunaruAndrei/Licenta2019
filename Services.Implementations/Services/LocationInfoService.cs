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
    public class LocationInfoService:ILocationInfoService
    {
        private readonly IMapper _mapper;
        private readonly IServiceLocationRepository _serviceLocationRepository;

        public LocationInfoService(
            IMapper mapper,
            IServiceLocationRepository serviceLocationRepository)
        {
            _mapper = mapper;
            _serviceLocationRepository = serviceLocationRepository;
        }
        public async Task<IEnumerable<ServiceLocationViewModel>> GetLocationsForServiceId(int id)
        {
            return _mapper.Map<IEnumerable<ServiceLocation>, IEnumerable<ServiceLocationViewModel>>(
                await _serviceLocationRepository.WhereAsync(e => e.ServiceInfoId == id));
        }

        public async Task<ServiceLocationViewModel> GetServiceLocation(int id)
        {
            return _mapper.Map<ServiceLocation, ServiceLocationViewModel>(await _serviceLocationRepository.GetById(id));
        }

        public async Task<int> AddServiceLocation(ServiceLocationViewModel entity, int serviceInfoId)
        {
            var mappedEntity = _mapper.Map<ServiceLocationViewModel, ServiceLocation>(entity);
            mappedEntity.ServiceInfoId = serviceInfoId;

            return await _serviceLocationRepository.Insert(mappedEntity);
        }

        public async Task<bool> UpdateServiceLocation(ServiceLocationViewModel entity, int locationId)
        {
            return await _serviceLocationRepository.Update(
                _mapper.Map<ServiceLocationViewModel, ServiceLocation>(entity));
        }

        public async Task<bool> DeleteServiceLocation(int locationId)
        {
            return await _serviceLocationRepository.Delete(
                await _serviceLocationRepository.GetById(locationId)
            );
        }
    }
}
