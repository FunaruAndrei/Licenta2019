using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Domain.IRepostories;
using Domain.Models.Services;
using Services.Models.ServicesModels;
using Services.Services;

namespace Services.Implementations.Services
{
    public class GeneralInfoService:IGeneralInfoService
    {
        private readonly IServiceInfoRepository _serviceInfoRepository;
        private readonly IMapper _mapper;
        private readonly IFileRepository _fileRepository;

        public GeneralInfoService(IServiceInfoRepository serviceInfoRepository, IMapper mapper, IFileRepository fileRepository)
        {
            _serviceInfoRepository = serviceInfoRepository;
            _mapper = mapper;
            _fileRepository = fileRepository;
        }
        public async Task<int> GetIdByUserId(int id)
        {
            var info = await _serviceInfoRepository.WhereAsync(e => e.UserId == id);
            if (info.Any())
            {
                return info.FirstOrDefault().ServiceInfoId;
            }
            else
            {
                return 0;
            }
        }

        public async Task<ServiceInfoViewModel> GetByUserId(int id)
        {
            var info = await _serviceInfoRepository.WhereAsync(e => e.UserId == id);
            if (info.Any())
            {
                return _mapper.Map<ServiceInfo, ServiceInfoViewModel>(info.FirstOrDefault());
            }
            else
            {
                return new ServiceInfoViewModel();
            }
        }

        public async Task<int> AddServiceInfoAsync(ServiceInfoViewModel entity)
        {
            if (await _serviceInfoRepository.Insert(_mapper.Map<ServiceInfoViewModel, ServiceInfo>(entity)))
            {
                var info =await _serviceInfoRepository.WhereAsync(e => e.UserId == entity.UserId);
                
                if(info.Any())
                    return info.FirstOrDefault()
                    .ServiceInfoId;
                else
                {
                    return 0;
                }
            }
            else
            {
                return 0;
            }
        }

        public async Task<bool> AddLogoFile(Stream stream, string filename, int serviceId)
        {
            if (await _fileRepository.Save(stream, "serviceslogo/" + serviceId + "/" + filename))
            {
               var service = await  _serviceInfoRepository.GetById(serviceId);
               service.Logo = filename;

               return await _serviceInfoRepository.Update(service);
            }
            else
            {
                return await Task.FromResult(false);
            }
        }

        public async Task<bool> UpdateServiceInfoAsync(ServiceInfoViewModel entity, int serviceId)
        {
            if (await _serviceInfoRepository.Update(_mapper.Map<ServiceInfoViewModel, ServiceInfo>(entity)))
            {
                return await Task.FromResult(true);
            }
            else
            {
                return await Task.FromResult(false);
            }
        }
    }
}
