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
    public class LocationManufacturerService:ILocationManufacturerService
    {
        private readonly IMapper _mapper;
        private readonly IServiceLocationManufacturerRepository _manufacturerRepository;

        public LocationManufacturerService(
            IMapper mapper,
            IServiceLocationManufacturerRepository manufacturerRepository)
        {
            _mapper = mapper;
            _manufacturerRepository = manufacturerRepository;
        }
        public async Task<IEnumerable<ServiceManufacturerViewModel>> GetByLocationId(int locationId)
        {
            return _mapper.Map<IEnumerable<ServiceManufacturer>, IEnumerable<ServiceManufacturerViewModel>>(
                await _manufacturerRepository.WhereAsync(e => e.ServiceLocationId == locationId));
        }

        public async Task<ServiceManufacturerViewModel> GetById(int id)
        {
            return _mapper.Map<ServiceManufacturer, ServiceManufacturerViewModel>(
                await _manufacturerRepository.GetById(id));
        }

        public async Task<int> AddServiceManufacturer(ServiceManufacturerViewModel entity)
        {
            return await _manufacturerRepository.Insert(
                _mapper.Map<ServiceManufacturerViewModel, ServiceManufacturer>(entity));
        }

        public async Task<bool> DeleteServiceManufacturer(int servLocFacilityId)
        {
            var ent = await _manufacturerRepository.GetById(servLocFacilityId);
            return await _manufacturerRepository.Delete(ent);
        }

    }
}
