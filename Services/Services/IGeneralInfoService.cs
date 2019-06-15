using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using Services.Models.ServicesModels;

namespace Services.Services
{
    public interface IGeneralInfoService
    {
        Task<int> GetIdByUserId(int id);
        Task<ServiceInfoViewModel> GetByUserId(int id);
        Task<int> AddServiceInfoAsync(ServiceInfoViewModel entity);
        Task<bool> UpdateServiceInfoAsync(ServiceInfoViewModel entity, int serviceId);
        Task<bool> AddLogoFile(Stream stream, string filename, int serviceId);
    }
}
