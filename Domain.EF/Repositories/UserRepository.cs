using System.Threading.Tasks;
using AutoMapper;
using Domain.EF.Models.Identity;
using Domain.IRepostories;
using Domain.Models.Identity;
using Microsoft.AspNetCore.Identity;

namespace Domain.EF.Repositories
{
    public class UserRepository:IUserRepository
    {
        private readonly UserManager<EServiceUser> _userManager;
        private readonly IMapper _mapper;

        public UserRepository(UserManager<EServiceUser> userManager, IMapper mapper)
        {
            _userManager = userManager;
            _mapper = mapper;
        }

        public async Task<UserEService> GetByIdAsync(int id)
        {
            return _mapper.Map<EServiceUser, UserEService>(await _userManager.FindByIdAsync(id.ToString()));
        }

        public async Task<UserEService> GetByName(string name)
        {
            return _mapper.Map<EServiceUser, UserEService>(await _userManager.FindByNameAsync(name));
        }
    }
}
