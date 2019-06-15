using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Domain.EF.Models.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Domain.EF.Context
{
    public class DatabaseSeeder
    {
        private readonly EServiceDbContext _dbContext;
        private readonly UserManager<EServiceUser> _userManager;
        private readonly RoleManager<EServiceRole> _roleManager;

        public DatabaseSeeder(EServiceDbContext dbContext, 
            UserManager<EServiceUser> userManager,
            RoleManager<EServiceRole> roleManager)
        {
            this._dbContext = dbContext;
            this._userManager = userManager;
            this._roleManager = roleManager;
        }
        

        public async Task Seed()
        {
           
        }


    }
}
