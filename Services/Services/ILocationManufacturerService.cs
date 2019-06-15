using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Services.Models.ServicesModels;

namespace Services.Services
{
    public  interface ILocationManufacturerService
    {
        Task<IEnumerable<ServiceManufacturerViewModel>> GetByLocationId(int locationId);
        Task<ServiceManufacturerViewModel> GetById(int id);
        Task<int> AddServiceManufacturer(ServiceManufacturerViewModel entity);
        Task<bool> DeleteServiceManufacturer(int servLocManId);
    }
}
