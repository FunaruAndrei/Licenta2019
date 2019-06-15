using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Models.ServicesModels;
using Services.Services;

namespace eService.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceGeneralInfoController : Controller
    {
        private readonly IGeneralInfoService _generalInfoService;
        private readonly IHostingEnvironment _hostingEnvironment;

        public ServiceGeneralInfoController(IGeneralInfoService generalInfoService, IHostingEnvironment hostingEnvironment)
        {
            _generalInfoService = generalInfoService;
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpPost]
        public async Task<ActionResult<ServiceInfoViewModel>> PostInfo(ServiceInfoViewModel entity)
        {
            var id = await _generalInfoService.AddServiceInfoAsync(entity);
            return CreatedAtAction("PostInfo", new {id = id}, entity);
        }

        [HttpPut("{id}")]
        public async Task<JsonResult> PutInfo(int id, ServiceInfoViewModel entity)
        {
            return Json(await _generalInfoService.UpdateServiceInfoAsync(entity, id));
        }


        [HttpGet("GetByUserId")]
        public async Task<JsonResult> Get(int id)
        {
            return Json(await _generalInfoService.GetByUserId(id));
        }

        [HttpGet("GetIdByUserId")]
        public async Task<JsonResult> GetIdByUserIdAsync(int id)
        {
            return Json(await _generalInfoService.GetIdByUserId(id));
        }

        [HttpPost("UploadLogoImage"), DisableRequestSizeLimit]
        public async Task<ActionResult> UploadFileAsync(int serviceId)
        {
            try
            {
                var file = Request.Form.Files[0];
                string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                using (Stream stream = file.OpenReadStream())
                {
                    await _generalInfoService.AddLogoFile(stream, fileName, serviceId);
                }
                return Json(true);
            }
            catch (System.Exception ex)
            {
                return Json(false);
            }
        }
    }
}