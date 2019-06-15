using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Models.ServicesModels;
using Services.Services;

namespace eService.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationFacilityController : Controller
    {
        private readonly ILocationFacilityService _locationFacilityService;

        public LocationFacilityController(ILocationFacilityService locationFacilityService)
        {
            _locationFacilityService = locationFacilityService;
        }
        [HttpGet("GetByLocationId")]
        public async Task<JsonResult> GetByLocationId(int locationId)
        {
            return Json(await _locationFacilityService.GetByLocationId(locationId));
        }

        [HttpPost]
        public async Task<JsonResult> Post(ServiceLocationFacilityViewModel entity)
        {
            return Json(await _locationFacilityService.AddServiceFacility(entity));
        }

        [HttpDelete("{id}")]
        public async Task<JsonResult> Delete(int id)
        {
            return Json(await _locationFacilityService.DeleteServiceFacility(id));
        }
    }
}