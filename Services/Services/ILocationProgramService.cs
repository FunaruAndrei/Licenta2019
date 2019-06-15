using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Services.Models.ServicesModels;

namespace Services.Services
{
    public interface ILocationProgramService
    {
        Task<IEnumerable<ServiceProgramViewModel>> GetByLocationId(int locationId);
        Task<ServiceProgramViewModel> GetById(int id);
        Task<int> AddServiceProgram(ServiceProgramViewModel entity);
        Task<bool> EditServiceProgramAsync(ServiceProgramViewModel entity, int id);
        Task<bool> DeleteServiceProgram(int servLocProgramId);
    }
}
