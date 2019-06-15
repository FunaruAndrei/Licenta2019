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
    public class ServiceManufacturerController : Controller
    {
        private readonly ILocationManufacturerService _locationManufacturerService;

        public ServiceManufacturerController(ILocationManufacturerService locationManufacturerService)
        {
            _locationManufacturerService = locationManufacturerService;
        }
        [HttpGet("GetByLocationId")]
        public async Task<JsonResult> GetByLocationId(int locationId)
        {
            return Json(await _locationManufacturerService.GetByLocationId(locationId));
        }

        [HttpPost]
        public async Task<JsonResult> Post(ServiceManufacturerViewModel entity)
        {
            return Json(await _locationManufacturerService.AddServiceManufacturer(entity));
        }

        [HttpDelete("{id}")]
        public async Task<JsonResult> Delete(int id)
        {
            return Json(await _locationManufacturerService.DeleteServiceManufacturer(id));
        }
    }
}