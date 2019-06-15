using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Domain.IRepostories;
using Domain.Models.Nomenclatoare;
using Services.Models.Nomenclatoare;
using Services.Services;

namespace Services.Implementations.Services
{
    public class NomenclatoareService: INomenclatoareService
    {
        private readonly IMapper _mapper;
        private readonly ICarManufacturerRepository _carManufacturerRepository;
        private readonly ICityRepository _cityRepository;
        private readonly IServiceFacilityRepository _serviceFacilityRepository;
        private readonly IContactTypeRepository _contactTypeRepository;
        private readonly IServiceOperationTypeRepository _serviceOperationTypeRepository;
        private readonly IServiceOperationRepository _serviceOperationRepository;

        public NomenclatoareService(
            IMapper mapper,
            ICarManufacturerRepository carManufacturerRepository,
            ICityRepository cityRepository,
            IServiceFacilityRepository serviceFacilityRepository,
            IContactTypeRepository contactTypeRepository,
            IServiceOperationTypeRepository serviceOperationTypeRepository,
            IServiceOperationRepository serviceOperationRepository)
        {
            _mapper = mapper;
            _carManufacturerRepository = carManufacturerRepository;
            _cityRepository = cityRepository;
            _serviceFacilityRepository = serviceFacilityRepository;
            _contactTypeRepository = contactTypeRepository;
            _serviceOperationTypeRepository = serviceOperationTypeRepository;
            _serviceOperationRepository = serviceOperationRepository;
        }

        public async Task<IEnumerable<CarManufacturerViewModel>> GetCarManufacturers()
        {
            return _mapper.Map<IEnumerable<CarManufacturer>, IEnumerable<CarManufacturerViewModel>>(await _carManufacturerRepository.GetAllAsync());
        }

        public async Task<IEnumerable<CityViewModel>> GetCities()
        {
            return _mapper.Map<IEnumerable<City>, IEnumerable<CityViewModel>>(await _cityRepository.GetAllAsync());
        }

        public async Task<IEnumerable<ContactTypeViewModel>> GetContactTypes()
        {
            return _mapper.Map<IEnumerable<ContactType>, IEnumerable<ContactTypeViewModel>>(await _contactTypeRepository.GetAllAsync());
        }

        public async Task<IEnumerable<ServiceFacilityViewModel>> GetServiceFacilities()
        {
            return _mapper.Map<IEnumerable<ServiceFacility>, IEnumerable<ServiceFacilityViewModel>>(await _serviceFacilityRepository.GetAllAsync());
        }

        public async Task<IEnumerable<ServiceOperationTypeViewModel>> GetServiceOperationTypes()
        {
            return _mapper.Map<IEnumerable<ServiceOperationType>, IEnumerable<ServiceOperationTypeViewModel>>(await _serviceOperationTypeRepository.GetAllAsync());
        }

        public async Task<IEnumerable<ServiceOperationViewModel>> GetServiceOperations()
        {
            return _mapper.Map<IEnumerable<ServiceOperation>, IEnumerable<ServiceOperationViewModel>>(await _serviceOperationRepository.GetAllAsync());
        }
    }
}
