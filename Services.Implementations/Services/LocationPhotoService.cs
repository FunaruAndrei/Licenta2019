using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Domain.IRepostories;
using Domain.IRepostories.ServiceLocationRepositories;
using Domain.Models.Services;
using Services.Models.ServicesModels;
using Services.Models.Utils;
using Services.Services;

namespace Services.Implementations.Services
{
    public class LocationPhotoService:ILocationPhotoService
    {
        private readonly IMapper _mapper;
        private readonly IServiceLocationPhotoRepository _photoRepository;
        private readonly IFileRepository _fileRepository;

        public LocationPhotoService(
            IMapper mapper,
            IServiceLocationPhotoRepository photoRepository,
            IFileRepository fileRepository)
        {
            _mapper = mapper;
            _photoRepository = photoRepository;
            _fileRepository = fileRepository;
        }
        public async Task<IEnumerable<ServiceLocationPhotoViewModel>> GetByLocationId(int locationId)
        {
            return _mapper.Map<IEnumerable<ServiceLocationPhoto>, IEnumerable<ServiceLocationPhotoViewModel>>(
                await _photoRepository.WhereAsync(e => e.ServiceLocationId == locationId));
        }

        public async Task<ServiceLocationPhotoViewModel> GetById(int id)
        {
            return _mapper.Map<ServiceLocationPhoto, ServiceLocationPhotoViewModel>(
                await _photoRepository.GetById(id));
        }

        public async Task<int> AddServicePhoto(ServiceLocationPhotoViewModel entity)
        {
            return await _photoRepository.Insert(
                _mapper.Map<ServiceLocationPhotoViewModel, ServiceLocationPhoto>(entity));
        }

        public async Task<bool> DeleteServicePhoto(int servLocFacilityId)
        {
            var ent = await _photoRepository.GetById(servLocFacilityId);

            if( await _fileRepository.DeleteAsync("serviceimages/" + ent.ServiceLocationId + "/" + ent.Link))
            {
                if (await _fileRepository.DeleteAsync("serviceimagesthumbnails/" + ent.ServiceLocationId + "/" + ent.Link))
                {
                    return await _photoRepository.Delete(ent);
                }
            }

            return await Task.FromResult(false);
        }

        public async Task<IEnumerable<ServiceLocationPhotoViewModel>> AddPhotosAsync(IEnumerable<ImageAddRequest> items, int locationId)
        {
            int? position = null;

            List<ServiceLocationPhotoViewModel> photos = new List<ServiceLocationPhotoViewModel>();
            foreach (var it in items)
            {
                int? i = null;
                var extension = it.Filename.Split('.').LastOrDefault();
                if (await _fileRepository.FileExists($@"serviceimages/{locationId}/{it.Filename}"))
                {
                   
                    i = 1;
                    while (await _fileRepository.FileExists(
                        $@"serviceimages/{locationId}/{it.Filename.Replace("." + extension, i + "." + extension)}")
                    )
                    {
                        i++;
                    }
                    
                }

                var file = it.Filename.Replace("." + extension, i + "." + extension);
                var name = 
                    $@"serviceimages/{locationId}/{file}";
                if (await _fileRepository.Save(it.Stream, name))
                {

                    if (position == null)
                    {
                        var locationPhotos = await _photoRepository.WhereAsync(e => e.ServiceLocationId == locationId);
                        if (locationPhotos.Any())
                        {
                            position = locationPhotos.Select(e => e.Position).Max() + 1;
                        }
                        else
                        {
                            position = 1;
                        }
                    }

                    ServiceLocationPhoto addPhoto = new ServiceLocationPhoto() {
                        ServiceLocationId = locationId,
                        Link = file,
                        Position =  (int)position++
                        
                    };

                    var newId = await _photoRepository.Insert(addPhoto);
                    if (newId != 0)
                    {
                        addPhoto.ServiceLocationPhotoId = newId;
                        photos.Add(_mapper.Map<ServiceLocationPhoto, ServiceLocationPhotoViewModel>(addPhoto));
                    }
                }

            }

            return photos;
        }
    }
}
