using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Services.Models.Nomenclatoare;

namespace Services.Services
{
    public  interface INomenclatoareService
    {
        Task<IEnumerable<CarManufacturerViewModel>> GetCarManufacturers();
        Task<IEnumerable<CityViewModel>> GetCities();
        Task<IEnumerable<ContactTypeViewModel>> GetContactTypes();
        Task<IEnumerable<ServiceFacilityViewModel>> GetServiceFacilities();
        Task<IEnumerable<ServiceOperationTypeViewModel>> GetServiceOperationTypes();
        Task<IEnumerable<ServiceOperationViewModel>> GetServiceOperations();
    }
}
