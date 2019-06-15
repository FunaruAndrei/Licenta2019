using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using Services.Models.ServicesModels;
using Services.Models.Utils;

namespace Services.Services
{
    public interface ILocationPhotoService
    {
        Task<IEnumerable<ServiceLocationPhotoViewModel>> GetByLocationId(int locationId);
        Task<ServiceLocationPhotoViewModel> GetById(int id);
        Task<int> AddServicePhoto(ServiceLocationPhotoViewModel entity);
        Task<bool> DeleteServicePhoto(int servLocPhotoId);
        Task<IEnumerable<ServiceLocationPhotoViewModel>> AddPhotosAsync(IEnumerable<ImageAddRequest> streams, int locationId);
    }
}
