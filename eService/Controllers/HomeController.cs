using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Domain.EF.Models.Identity;
using Microsoft.AspNetCore.Mvc;
using eService.Models;
using Microsoft.AspNetCore.Identity;

namespace eService.Controllers
{
    public class HomeController : Controller
    {
        private readonly SignInManager<EServiceUser> _signInManager;

        public HomeController(SignInManager<EServiceUser> signInManager)
        {
            _signInManager = signInManager;
        }
        public async Task<IActionResult> Index()
        {
            if (User.IsInRole("Admin"))
            {
               await _signInManager.SignOutAsync();
            }
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
