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
    public class SearchPageController : Controller
    {
        private readonly ISearchPageService _searchPageService;

        public SearchPageController(ISearchPageService searchPageService)
        {
            _searchPageService = searchPageService;
        }

        [HttpGet("GetSearchCounters")]
        public async Task<JsonResult> GetSearchCounters()
        {
            return Json(await  _searchPageService.GetCounterStats());
        }
    }
}