using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.EF.Context;
using Domain.EF.Models.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace eService.Controllers
{
    public class SeedDatabaseController : Controller
    {
        private readonly EServiceDbContext _dbContext;
        private readonly UserManager<EServiceUser> _userManager;
        private readonly RoleManager<EServiceRole> _roleManager;

        public SeedDatabaseController(
            EServiceDbContext dbContext, UserManager<EServiceUser> userManager,
            RoleManager<EServiceRole> roleManager)
        {
            _dbContext = dbContext;
            _userManager = userManager;
            _roleManager = roleManager;
        }

        public async Task<IActionResult> Index()
        {
            var exist = await _dbContext.Database.EnsureCreatedAsync();
            if (!exist)
            {
                var usr = await _userManager.FindByNameAsync("admin");
                if (usr == null)
                {
                    EServiceUser newUser = new EServiceUser()
                    {
                        Email = "admin@eservice.ro",
                        UserName = "admin"
                    };

                    if ((await _userManager.CreateAsync(newUser, "Eservice_123")).Succeeded == true)
                    {
                        usr = newUser;
                    }



                }

                if (!(await _roleManager.RoleExistsAsync("Admin")))
                {
                    await _roleManager.CreateAsync(new EServiceRole() { Name = "Admin" });
                }

                if (!(await _userManager.IsInRoleAsync(usr, "Admin")))
                {
                    await _userManager.AddToRoleAsync(usr, "Admin");
                }
            }

            return View();
        }
    }
}