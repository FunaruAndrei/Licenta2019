using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.IRepostories.ServiceLocationRepositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Models.ServicesModels;
using Services.Services;

namespace eService.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationInfoController : Controller
    {
        private readonly ILocationInfoService _locationInfoService;

        public LocationInfoController(ILocationInfoService locationInfoService)
        {
            _locationInfoService = locationInfoService;
        }

        [HttpGet("GetByInfoId")]
        public async Task<JsonResult> GetByInfoId(int id)
        {
            return Json(await _locationInfoService.GetLocationsForServiceId(id));
        }

        [HttpGet("{id}")]
        public async Task<JsonResult> Get(int id)
        {
            return Json(await _locationInfoService.GetServiceLocation(id));
        }

        [HttpPost]
        public async Task<JsonResult> Post(ServiceLocationViewModel entity, int serviceInfoId)
        {
            return Json(await _locationInfoService.AddServiceLocation(entity, serviceInfoId));
        }

        [HttpPut("{id}")]
        public async Task<JsonResult> Put(ServiceLocationViewModel entity, int id)
        {
            return Json(await _locationInfoService.UpdateServiceLocation(entity, id));
        }
    }
}