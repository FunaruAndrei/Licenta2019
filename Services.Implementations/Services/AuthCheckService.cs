using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Services;
using Services.Models.Auth;
using Domain.IRepostories;
using Domain.Models.Identity;

namespace Services.Implementations.Services
{
    public class AuthCheckService:IAuthCheckService
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public AuthCheckService(IUserRepository userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }
        public async Task<AuthCheckUser> GetCurentUser(string name)
        {
            return   _mapper.Map<UserEService, AuthCheckUser>(await _userRepository.GetByName(name)) ;
        }
    }
}
