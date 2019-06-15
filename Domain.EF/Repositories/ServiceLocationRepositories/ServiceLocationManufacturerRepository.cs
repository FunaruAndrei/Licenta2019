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
    public class ServiceLocationManufacturerRepository:IServiceLocationManufacturerRepository
    {
        private readonly EServiceDbContext _dbContext;

        public ServiceLocationManufacturerRepository(EServiceDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<ServiceManufacturer>> GetAllAsync()
        {
            return await _dbContext.ServiceManufacturers.ToListAsync();
        }

        public async Task<ServiceManufacturer> GetById(int id)
        {
            return await _dbContext.ServiceManufacturers.SingleOrDefaultAsync(e => e.ServiceManufacturerId == id);
        }

        public async Task<IEnumerable<ServiceManufacturer>> WhereAsync(Expression<Func<ServiceManufacturer, bool>> exp)
        {
            return await _dbContext.ServiceManufacturers.Where(exp).ToListAsync();
        }

        public async Task<int> Insert(ServiceManufacturer entity)
        {
            try
            {
                await _dbContext.ServiceManufacturers.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return entity.ServiceManufacturerId;
            }
            catch (Exception e)
            {
                return 0;
            }

        }

        public async Task<bool> Update(ServiceManufacturer entity)
        {
            try
            {
                _dbContext.ServiceManufacturers.Update(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<bool> Delete(ServiceManufacturer entity)
        {
            try
            {
                _dbContext.ServiceManufacturers.Remove(entity);
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
