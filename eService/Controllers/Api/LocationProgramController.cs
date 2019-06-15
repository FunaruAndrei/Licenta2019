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
    public class LocationProgramController : Controller
    {
        private readonly ILocationProgramService _locationProgramService;

        public LocationProgramController(ILocationProgramService locationProgramService)
        {
            _locationProgramService = locationProgramService;
        }
        [HttpGet("GetByLocationId")]
        public async Task<JsonResult> GetByLocationId(int locationId)
        {
            return Json(await _locationProgramService.GetByLocationId(locationId));
        }

        [HttpPost]
        public async Task<JsonResult> Post(ServiceProgramViewModel entity)
        {
            return Json(await _locationProgramService.AddServiceProgram(entity));
        }

        [HttpDelete("{id}")]
        public async Task<JsonResult> Delete(int id)
        {
            return Json(await _locationProgramService.DeleteServiceProgram(id));
        }

        [HttpPut("{id}")]
        public async Task<JsonResult> Put(ServiceProgramViewModel entity, int id)
        {
            return Json(await _locationProgramService.EditServiceProgramAsync(entity, id));
        }
    }
}