using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Domain.EF.Models.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace eService.Areas.Identity.Pages.Account
{
    [AllowAnonymous]
    public class LogoutModelAdmin : PageModel
    {
        private readonly SignInManager<EServiceUser> _signInManager;
        private readonly ILogger<LogoutModelAdmin> _logger;

        public LogoutModelAdmin(SignInManager<EServiceUser> signInManager, ILogger<LogoutModelAdmin> logger)
        {
            _signInManager = signInManager;
            _logger = logger;
        }

        public async Task<IActionResult> OnGetAsync()
        {
            await _signInManager.SignOutAsync();
            return RedirectToAction("Index", "Admin", new
            {
                area = ""
            });
        }

        public async Task<IActionResult> OnPost(string returnUrl = null)
        {
            await _signInManager.SignOutAsync();
            _logger.LogInformation("User logged out.");
            return RedirectToAction("Index", "Admin", new
            {
                area = ""
            });

        }
    }
}