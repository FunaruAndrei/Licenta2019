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
    public class ServiceLocationOperationRepository:IServiceLocationOperationRepository
    {
        private readonly EServiceDbContext _dbContext;

        public ServiceLocationOperationRepository(EServiceDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<ServiceLocationOperation>> GetAllAsync()
        {
            return await _dbContext.ServiceLocationOperations.ToListAsync();
        }

        public async Task<ServiceLocationOperation> GetById(int id)
        {
            return await _dbContext.ServiceLocationOperations.SingleOrDefaultAsync(e => e.ServiceLocationOperationId == id);
        }

        public async Task<IEnumerable<ServiceLocationOperation>> WhereAsync(Expression<Func<ServiceLocationOperation, bool>> exp)
        {
            return await _dbContext.ServiceLocationOperations.Where(exp).ToListAsync();
        }

        public async Task<int> Insert(ServiceLocationOperation entity)
        {
            try
            {
                await _dbContext.ServiceLocationOperations.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return entity.ServiceLocationOperationId;
            }
            catch (Exception e)
            {
                return 0;
            }

        }

        public async Task<bool> Update(ServiceLocationOperation entity)
        {
            try
            {
                _dbContext.ServiceLocationOperations.Update(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<bool> Delete(ServiceLocationOperation entity)
        {
            try
            {
                _dbContext.ServiceLocationOperations.Remove(entity);
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
