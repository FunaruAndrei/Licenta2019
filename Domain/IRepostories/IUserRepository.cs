using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Domain.Models.Identity;

namespace Domain.IRepostories
{
    public interface IUserRepository
    {
        Task<UserEService> GetByName(string name);
    }
}
