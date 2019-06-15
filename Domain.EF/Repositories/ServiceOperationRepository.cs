using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Domain.EF.Context;
using Domain.IRepostories;
using Domain.Models.Nomenclatoare;
using Microsoft.EntityFrameworkCore;

namespace Domain.EF.Repositories
{
    public class ServiceOperationRepository:IServiceOperationRepository
    {
        private readonly EServiceDbContext _dbContext;

        public ServiceOperationRepository(EServiceDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<ServiceOperation>> GetAllAsync()
        {
            return await _dbContext.ServiceOperations.Include(e=>e.ServiceOperationType).ToListAsync();
        }

        public async Task<ServiceOperation> GetById(int id)
        {
            return await _dbContext.ServiceOperations.SingleOrDefaultAsync(e => e.ServiceOperationId == id);
        }

        public async Task<IEnumerable<ServiceOperation>> WhereAsync(Expression<Func<ServiceOperation, bool>> exp)
        {
            return await _dbContext.ServiceOperations.Where(exp).ToListAsync();
        }

        public async Task<bool> Insert(ServiceOperation entity)
        {
            try
            {
                await _dbContext.ServiceOperations.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }

        }

        public async Task<bool> Update(ServiceOperation entity)
        {
            try
            {
                _dbContext.ServiceOperations.Update(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<bool> Delete(ServiceOperation entity)
        {
            try
            {
                _dbContext.ServiceOperations.Remove(entity);
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
