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
    public class ServiceLocationContactRepository:IServiceLocationContactRepository
    {
        private readonly EServiceDbContext _dbContext;

        public ServiceLocationContactRepository(EServiceDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<ServiceLocationContact>> GetAllAsync()
        {
            return await _dbContext.ServiceLocationContacts.ToListAsync();
        }

        public async Task<ServiceLocationContact> GetById(int id)
        {
            return await _dbContext.ServiceLocationContacts.SingleOrDefaultAsync(e => e.ServiceLocationContactId == id);
        }

        public async Task<IEnumerable<ServiceLocationContact>> WhereAsync(Expression<Func<ServiceLocationContact, bool>> exp)
        {
            return await _dbContext.ServiceLocationContacts.Where(exp).ToListAsync();
        }

        public async Task<int> Insert(ServiceLocationContact entity)
        {
            try
            {
                await _dbContext.ServiceLocationContacts.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return entity.ServiceLocationContactId;
            }
            catch (Exception e)
            {
                return 0;
            }

        }

        public async Task<bool> Update(ServiceLocationContact entity)
        {
            try
            {
                _dbContext.ServiceLocationContacts.Update(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<bool> Delete(ServiceLocationContact entity)
        {
            try
            {
                _dbContext.ServiceLocationContacts.Remove(entity);
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
