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
    public class ServiceLocationFacilityRepository:IServiceLocationFacilityRepository
    {
        private readonly EServiceDbContext _dbContext;

        public ServiceLocationFacilityRepository(EServiceDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<ServiceLocationFacility>> GetAllAsync()
        {
            return await _dbContext.ServiceLocationFacilities.ToListAsync();
        }

        public async Task<ServiceLocationFacility> GetById(int id)
        {
            return await _dbContext.ServiceLocationFacilities.SingleOrDefaultAsync(e => e.ServiceLocationFacilityId == id);
        }

        public async Task<IEnumerable<ServiceLocationFacility>> WhereAsync(Expression<Func<ServiceLocationFacility, bool>> exp)
        {
            return await _dbContext.ServiceLocationFacilities.Where(exp).ToListAsync();
        }

        public async Task<int> Insert(ServiceLocationFacility entity)
        {
            try
            {
                await _dbContext.ServiceLocationFacilities.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return entity.ServiceLocationFacilityId;
            }
            catch (Exception e)
            {
                return 0;
            }

        }

        public async Task<bool> Update(ServiceLocationFacility entity)
        {
            try
            {
                _dbContext.ServiceLocationFacilities.Update(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<bool> Delete(ServiceLocationFacility entity)
        {
            try
            {
                _dbContext.ServiceLocationFacilities.Remove(entity);
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
