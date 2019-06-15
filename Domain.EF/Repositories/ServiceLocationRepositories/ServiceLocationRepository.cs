using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Domain.EF.Context;
using Domain.IRepostories.ServiceLocationRepositories;
using Domain.Models.Services;
using Microsoft.EntityFrameworkCore;

namespace Domain.EF.Repositories.ServiceLocationRepositories
{
    public class ServiceLocationRepository:IServiceLocationRepository
    {
        private readonly EServiceDbContext _dbContext;

        public ServiceLocationRepository(EServiceDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<ServiceLocation>> GetAllAsync()
        {
            return await _dbContext.ServiceLocations.Include(e => e.City).ToListAsync();
        }

        public async Task<IEnumerable<ServiceLocation>> GetAllIncludeAsync()
        {
            return await _dbContext.ServiceLocations
                .Include(e => e.City)
                .Include(e=>e.ServiceLocationFacilities)
                .Include(e=>e.ServiceLocationReviews)
                .Include(e=>e.ServiceManufacturers)
                .Include(e=>e.ServiceLocationOperations)
                .Include(e=>e.ServiceLocationPhotos)
                .Include(e=>e.ServiceInfo)
                .ToListAsync();
        }

        public async Task<ServiceLocation> GetById(int id)
        {
            return await _dbContext.ServiceLocations
                .Include(e => e.City)
                .Include(e => e.ServiceLocationFacilities)
                .Include(e => e.ServiceLocationReviews)
                .Include(e => e.ServiceManufacturers)
                .Include(e => e.ServiceLocationOperations)
                .Include(e => e.ServiceLocationPhotos)
                .Include(e => e.ServiceInfo)
                .Include(e=>e.ServicePromotions)
                .Include(e => e.ServiceLocationContacts)
                .Include(e => e.ServicePrograms)
                .SingleOrDefaultAsync(e => e.ServiceLocationId == id);
        }

        public async Task<IEnumerable<ServiceLocation>> WhereAsync(Expression<Func<ServiceLocation, bool>> exp)
        {
            return await _dbContext.ServiceLocations.Where(exp).Include(e=>e.City).ToListAsync();
        }

        public async Task<int> Insert(ServiceLocation entity)
        {
            try
            {
                await _dbContext.ServiceLocations.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return entity.ServiceLocationId;
            }
            catch (Exception e)
            {
                return 0;
            }

        }

        public async Task<bool> Update(ServiceLocation entity)
        {
            try
            {
                _dbContext.ServiceLocations.Update(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<bool> Delete(ServiceLocation entity)
        {
            try
            {
                _dbContext.ServiceLocations.Remove(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }
}
