using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Domain.EF.Context;
using Domain.IRepostories;
using Domain.Models.Services;
using Microsoft.EntityFrameworkCore;

namespace Domain.EF.Repositories
{
    public class ServiceInfoRepository:IServiceInfoRepository
    {
        private readonly EServiceDbContext _dbContext;

        public ServiceInfoRepository(EServiceDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<ServiceInfo>> GetAllAsync()
        {
            return await _dbContext.ServiceInfos.ToListAsync();
        }

        public async Task<ServiceInfo> GetById(int id)
        {
            return await _dbContext.ServiceInfos.SingleOrDefaultAsync(e => e.ServiceInfoId == id);
        }

        public async Task<IEnumerable<ServiceInfo>> WhereAsync(Expression<Func<ServiceInfo, bool>> exp)
        {
            return await _dbContext.ServiceInfos.Where(exp).ToListAsync();
        }

        public async Task<bool> Insert(ServiceInfo entity)
        {
            try
            {
                await _dbContext.ServiceInfos.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
            
        }

        public async Task<bool> Update(ServiceInfo entity)
        {
            try
            {
                _dbContext.ServiceInfos.Update(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<bool> Delete(ServiceInfo entity)
        {
            try
            {
                _dbContext.ServiceInfos.Remove(entity);
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
