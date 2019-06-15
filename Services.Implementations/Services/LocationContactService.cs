using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Domain.IRepostories.ServiceLocationRepositories;
using Domain.Models.Services;
using Services.Models.ServicesModels;
using Services.Services;

namespace Services.Implementations.Services
{
    public class LocationContactService:ILocationContactService
    {
        private readonly IMapper _mapper;
        private readonly IServiceLocationContactRepository _contactRepository;

        public LocationContactService(
            IMapper mapper,
            IServiceLocationContactRepository contactRepository)
        {
            _mapper = mapper;
            _contactRepository = contactRepository;
        }
        public async Task<IEnumerable<ServiceLocationContactViewModel>> GetByLocationId(int locationId)
        {
            return _mapper.Map<IEnumerable<ServiceLocationContact>, IEnumerable<ServiceLocationContactViewModel>>(
                await _contactRepository.WhereAsync(e => e.ServiceLocationId == locationId));
        }

        public async Task<ServiceLocationContactViewModel> GetById(int id)
        {
            return _mapper.Map<ServiceLocationContact, ServiceLocationContactViewModel>(
                await _contactRepository.GetById(id));
        }

        public async Task<int> AddServiceContact(ServiceLocationContactViewModel entity)
        {
            return await _contactRepository.Insert(
                _mapper.Map<ServiceLocationContactViewModel, ServiceLocationContact>(entity));
        }

        public async Task<bool> DeleteServiceContact(int servLocContactId)
        {
            var ent = await _contactRepository.GetById(servLocContactId);
            return await _contactRepository.Delete(ent);
        }
    }
}
