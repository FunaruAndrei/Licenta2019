using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.IRepostories;
using Domain.IRepostories.ServiceLocationRepositories;
using Services.Models.Client;
using Services.Services;

namespace Services.Implementations.Services
{
    public class SearchPageService : ISearchPageService
    {
        private readonly IServiceLocationRepository _locationRepository;
        private readonly IServiceLocationOperationRepository _locationOperationRepository;
        private readonly IServiceOperationRepository _operationRepository;

        public SearchPageService(IServiceLocationRepository locationRepository,
            IServiceLocationOperationRepository locationOperationRepository,
            IServiceOperationRepository operationRepository)
        {
            _locationRepository = locationRepository;
            _locationOperationRepository = locationOperationRepository;
            _operationRepository = operationRepository;
        }

        public async Task<IEnumerable<SearchCounterStats>> GetCounterStats()
        {
            var locations = await _locationOperationRepository.GetAllAsync();
            var ops = await _operationRepository.GetAllAsync();

            List<SearchCounterStats> stats = new List<SearchCounterStats>();

            stats.Add(new SearchCounterStats()
            {
                Id = 1,
                Name = "Service-uri",
                Count = locations
                    .Where(e => ops.Where(z => z.ServiceOperationType.ServiceOperationTypeId < 15)
                                    .Any(z => z.ServiceOperationId == e.ServiceOperationId) == true)
                    .Select(e => e.ServiceLocationId).Distinct().Count()
            });

            stats.Add(new SearchCounterStats()
            {
                Id = 2,
                Name = "Vulcanizari",
                Count = locations.Where(e => ops.Where(z => z.ServiceOperationType.ServiceOperationTypeId == 16).Any(z => z.ServiceOperationId == e.ServiceOperationId) == true).Select(e => e.ServiceLocationId).Distinct().Count()
            });

            stats.Add(new SearchCounterStats()
            {
                Id = 3,
                Name = "Spalatorii",
                Count = locations.Where(e => ops.Where(z => z.ServiceOperationType.ServiceOperationTypeId == 15).Any(z => z.ServiceOperationId == e.ServiceOperationId) == true).Select(e => e.ServiceLocationId).Distinct().Count()
            });

            return stats;


        }
    }
}
 