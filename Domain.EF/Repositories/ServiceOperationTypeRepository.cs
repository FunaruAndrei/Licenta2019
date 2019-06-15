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
    public class ServiceOperationTypeRepository:IServiceOperationTypeRepository
    {
        private readonly EServiceDbContext _dbContext;

        public ServiceOperationTypeRepository(EServiceDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<ServiceOperationType>> GetAllAsync()
        {
            return await _dbContext.ServiceOperationTypes.ToListAsync();
        }

        public async Task<ServiceOperationType> GetById(int id)
        {
            return await _dbContext.ServiceOperationTypes.SingleOrDefaultAsync(e => e.ServiceOperationTypeId == id);
        }

        public async Task<IEnumerable<ServiceOperationType>> WhereAsync(Expression<Func<ServiceOperationType, bool>> exp)
        {
            return await _dbContext.ServiceOperationTypes.Where(exp).ToListAsync();
        }

        public async Task<bool> Insert(ServiceOperationType entity)
        {
            try
            {
                await _dbContext.ServiceOperationTypes.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }

        }

        public async Task<bool> Update(ServiceOperationType entity)
        {
            try
            {
                _dbContext.ServiceOperationTypes.Update(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<bool> Delete(ServiceOperationType entity)
        {
            try
            {
                _dbContext.ServiceOperationTypes.Remove(entity);
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
