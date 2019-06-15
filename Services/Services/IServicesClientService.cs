using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Services.Models.Client;

namespace Services.Services
{
    public interface IServicesClientService
    {
        Task<IEnumerable<ServiceClientViewModel>> GetServices(ServicesClientRequest req);
        Task<ServiceDetailViewModel> GetServiceById(int id);
    }
}
