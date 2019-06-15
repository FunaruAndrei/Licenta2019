using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eService.Areas.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace eService.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
            if (User.Identity.IsAuthenticated)
            {
                if (User.IsInRole("Admin"))
                {
                    return View();
                }
                else
                {
                    return RedirectToAction("Index", "Home");
                }
            }
            else
            {
                //return RedirectToAction("LoginAdmin", "Account", new {area = "Identity" });
                return Redirect("/Identity/Account/LoginAdmin");
            }
            
        }
    }
}