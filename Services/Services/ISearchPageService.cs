﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Services.Models.Client;

namespace Services.Services
{
    public interface ISearchPageService
    {
        Task<IEnumerable<SearchCounterStats>> GetCounterStats();
    }
}
