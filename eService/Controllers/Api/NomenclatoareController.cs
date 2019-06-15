using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Services;

namespace eService.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class NomenclatoareController : Controller
    {
        private readonly INomenclatoareService _nomenclatoareService;

        public NomenclatoareController(INomenclatoareService nomenclatoareService)
        {
            _nomenclatoareService = nomenclatoareService;
        }

        [HttpGet("GetCarManufacturers")]
        public async Task<JsonResult> GetCarManufacturers()
        {
            return Json(await _nomenclatoareService.GetCarManufacturers());
        }

        [HttpGet("GetCities")]
        public async Task<JsonResult> GetCities()
        {
            return Json(await _nomenclatoareService.GetCities());
        }

        [HttpGet("GetContactTypes")]
        public async Task<JsonResult> GetContactTypes()
        {
            return Json(await _nomenclatoareService.GetContactTypes());
        }

        [HttpGet("GetServiceFacilities")]
        public async Task<JsonResult> GetServiceFacilities()
        {
            return Json(await _nomenclatoareService.GetServiceFacilities());
        }

        [HttpGet("GetServiceOperationTypes")]
        public async Task<JsonResult> GetServiceOperationTypes()
        {
            return Json(await _nomenclatoareService.GetServiceOperationTypes());
        }

        [HttpGet("GetServiceOperations")]
        public async Task<JsonResult> GetServiceOperations()
        {
            return Json(await _nomenclatoareService.GetServiceOperations());
        }
    }
}