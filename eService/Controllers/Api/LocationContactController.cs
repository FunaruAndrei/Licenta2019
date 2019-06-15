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
    public class LocationContactController : Controller
    {
        private readonly ILocationContactService _locationContactService;

        public LocationContactController(ILocationContactService locationContactService)
        {
            _locationContactService = locationContactService;
        }

        [HttpGet("GetByLocationId")]
        public async Task<JsonResult> GetByLocationId(int locationId)
        {
            return Json(await _locationContactService.GetByLocationId(locationId));
        }

        [HttpPost]
        public async Task<JsonResult> Post(ServiceLocationContactViewModel entity)
        {
            return Json(await _locationContactService.AddServiceContact(entity));
        }

        [HttpDelete("{id}")]
        public async Task<JsonResult> Delete(int id)
        {
            return Json(await _locationContactService.DeleteServiceContact(id));
        }

    }
}