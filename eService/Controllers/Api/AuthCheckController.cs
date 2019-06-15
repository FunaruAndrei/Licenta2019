using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services;
using Services.Models.Auth;

namespace eService.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthCheckController : Controller
    {
        private readonly IAuthCheckService _authCheckService;

        public AuthCheckController(IAuthCheckService authCheckService)
        {
            _authCheckService = authCheckService;
        }

        [HttpGet]
        public async Task<AuthCheckUser> Get()
        {
            return await _authCheckService.GetCurentUser(User.Identity.Name);
        }
    }
}