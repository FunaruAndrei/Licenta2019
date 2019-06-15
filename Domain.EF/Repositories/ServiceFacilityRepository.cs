using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Domain.EF.Context;
using Domain.IRepostories;
using Domain.Models.Nomenclatoare;
using Domain.Models.Services;
using Microsoft.EntityFrameworkCore;

namespace Domain.EF.Repositories
{
    public class ServiceFacilityRepository:IServiceFacilityRepository
    {
        private readonly EServiceDbContext _dbContext;

        public ServiceFacilityRepository(EServiceDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<ServiceFacility>> GetAllAsync()
        {
            return await _dbContext.ServiceFacilities.ToListAsync();
        }

        public async Task<ServiceFacility> GetById(int id)
        {
            return await _dbContext.ServiceFacilities.SingleOrDefaultAsync(e => e.ServiceFacilityId == id);
        }

        public async Task<IEnumerable<ServiceFacility>> WhereAsync(Expression<Func<ServiceFacility, bool>> exp)
        {
            return await _dbContext.ServiceFacilities.Where(exp).ToListAsync();
        }

        public async Task<bool> Insert(ServiceFacility entity)
        {
            try
            {
                await _dbContext.ServiceFacilities.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }

        }

        public async Task<bool> Update(ServiceFacility entity)
        {
            try
            {
                _dbContext.ServiceFacilities.Update(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<bool> Delete(ServiceFacility entity)
        {
            try
            {
                _dbContext.ServiceFacilities.Remove(entity);
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
