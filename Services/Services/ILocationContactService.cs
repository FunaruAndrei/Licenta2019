using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Services.Models.ServicesModels;

namespace Services.Services
{
    public interface ILocationContactService
    {
        Task<IEnumerable<ServiceLocationContactViewModel>> GetByLocationId(int locationId);
        Task<ServiceLocationContactViewModel> GetById(int id);
        Task<int> AddServiceContact(ServiceLocationContactViewModel entity);
        Task<bool> DeleteServiceContact(int servLocContactId);
    }
}
