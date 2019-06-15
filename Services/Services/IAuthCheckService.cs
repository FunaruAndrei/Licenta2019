using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Services.Models.Auth;

namespace Services
{
    public interface IAuthCheckService
    {
        Task<AuthCheckUser> GetCurentUser(string name);
    }
}
