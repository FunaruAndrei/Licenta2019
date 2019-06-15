using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Services.Models.ServicesModels;

namespace Services.Services
{
    public interface ILocationOperationsService
    {
        Task<IEnumerable<ServiceLocationOperationViewModel>> GetByLocationId(int locationId);
        Task<ServiceLocationOperationViewModel> GetById(int id);
        Task<int> AddServiceOperation(ServiceLocationOperationViewModel entity);
        Task<bool> EditServiceOperation(ServiceLocationOperationViewModel entity, int id);
        Task<bool> DeleteServiceOperation(int servLocOpId);
    }
}
