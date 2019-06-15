using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Services.Models.ServicesModels;

namespace Services.Services
{
    public interface ILocationFacilityService
    {
        Task<IEnumerable<ServiceLocationFacilityViewModel>> GetByLocationId(int locationId);
        Task<ServiceLocationFacilityViewModel> GetById(int id);
        Task<int> AddServiceFacility(ServiceLocationFacilityViewModel entity);
        Task<bool> DeleteServiceFacility(int servLocFacilityId);
    }
}
