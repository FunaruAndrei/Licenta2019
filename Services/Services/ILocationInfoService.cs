using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Services.Models.ServicesModels;

namespace Services.Services
{
    public interface ILocationInfoService
    {
        Task<IEnumerable<ServiceLocationViewModel>> GetLocationsForServiceId(int id);
        Task<ServiceLocationViewModel> GetServiceLocation(int id);
        Task<int> AddServiceLocation(ServiceLocationViewModel entity, int serviceInfoId);
        Task<bool> UpdateServiceLocation(ServiceLocationViewModel entity, int locationId);
        Task<bool> DeleteServiceLocation(int locationId);
    }
}
