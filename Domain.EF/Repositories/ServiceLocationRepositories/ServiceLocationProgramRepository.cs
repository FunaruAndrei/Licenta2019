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
    public class ServiceLocationProgramRepository:IServiceLocationProgramRepository
    {
        private readonly EServiceDbContext _dbContext;

        public ServiceLocationProgramRepository(EServiceDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<ServiceProgram>> GetAllAsync()
        {
            return await _dbContext.ServicePrograms.ToListAsync();
        }

        public async Task<ServiceProgram> GetById(int id)
        {
            return await _dbContext.ServicePrograms.SingleOrDefaultAsync(e => e.ServiceProgramId == id);
        }

        public async Task<IEnumerable<ServiceProgram>> WhereAsync(Expression<Func<ServiceProgram, bool>> exp)
        {
            return await _dbContext.ServicePrograms.Where(exp).ToListAsync();
        }

        public async Task<int> Insert(ServiceProgram entity)
        {
            try
            {
                await _dbContext.ServicePrograms.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return entity.ServiceProgramId;
            }
            catch (Exception e)
            {
                return 0;
            }

        }

        public async Task<bool> Update(ServiceProgram entity)
        {
            try
            {
                _dbContext.ServicePrograms.Update(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<bool> Delete(ServiceProgram entity)
        {
            try
            {
                _dbContext.ServicePrograms.Remove(entity);
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
