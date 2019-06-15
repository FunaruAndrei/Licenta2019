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
    public class LocationOperationController : Controller
    {
        private readonly ILocationOperationsService _locationOperationsService;

        public LocationOperationController(ILocationOperationsService locationOperationsService)
        {
            _locationOperationsService = locationOperationsService;
        }
        [HttpGet("GetByLocationId")]
        public async Task<JsonResult> GetByLocationId(int locationId)
        {
            return Json(await _locationOperationsService.GetByLocationId(locationId));
        }

        [HttpPost]
        public async Task<JsonResult> Post(ServiceLocationOperationViewModel entity)
        {
            return Json(await _locationOperationsService.AddServiceOperation(entity));
        }

        [HttpDelete("{id}")]
        public async Task<JsonResult> Delete(int id)
        {
            return Json(await _locationOperationsService.DeleteServiceOperation(id));
        }

        [HttpPut("{id}")]
        public async Task<JsonResult> Put(ServiceLocationOperationViewModel entity, int id)
        {
            return Json(await _locationOperationsService.EditServiceOperation(entity, id));
        }
    }
}