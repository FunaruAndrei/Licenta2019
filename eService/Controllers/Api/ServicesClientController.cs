using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Models.Client;
using Services.Services;

namespace eService.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesClientController : Controller
    {
        private readonly IServicesClientService _clientService;

        public ServicesClientController(IServicesClientService clientService)
        {
            _clientService = clientService;
        }

        [HttpPost]
        public async Task<JsonResult> GetServices(ServicesClientRequest request)
        {
            return Json(await _clientService.GetServices(request));
        }

        [HttpGet("{id}")]
        public async Task<JsonResult> Get(int id)
        {
            return Json(await _clientService.GetServiceById(id));
        }
    }
}