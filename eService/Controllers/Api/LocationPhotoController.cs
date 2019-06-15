using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Models.ServicesModels;
using Services.Models.Utils;
using Services.Services;

namespace eService.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationPhotoController : Controller
    {
        private readonly ILocationPhotoService _locationPhotoService;

        public LocationPhotoController(ILocationPhotoService locationPhotoService)
        {
            _locationPhotoService = locationPhotoService;
        }

        [HttpGet("GetByLocationId")]
        public async Task<JsonResult> GetByLocationId(int locationId)
        {
            return Json(await _locationPhotoService.GetByLocationId(locationId));
        }

        [HttpDelete("{id}")]
        public async Task<JsonResult> Delete(int id)
        {
            return Json(await _locationPhotoService.DeleteServicePhoto(id));
        }

        [HttpPost("{locationId}"), DisableRequestSizeLimit]
        public async Task<ActionResult> UploadFileAsync(int locationId)
        {
            try
            {
                List<ImageAddRequest> files = new List<ImageAddRequest>();

                foreach (var file in Request.Form.Files)
                {
                    ImageAddRequest req = new ImageAddRequest();
                    req.Stream = new MemoryStream();
                    await file.CopyToAsync(req.Stream);
                    req.Stream.Position = 0;
                    req.Filename = file.FileName;
                    files.Add(req);
                }


                return Json(await _locationPhotoService.AddPhotosAsync(files, locationId));
            }
            catch (System.Exception)
            {
                return Json(new List<ServiceLocationPhotoViewModel>());
            }
        }
    }
}