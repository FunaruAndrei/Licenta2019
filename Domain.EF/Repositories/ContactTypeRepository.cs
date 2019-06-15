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
    public class ContactTypeRepository:IContactTypeRepository
    {
        private readonly EServiceDbContext _dbContext;

        public ContactTypeRepository(EServiceDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<ContactType>> GetAllAsync()
        {
            return await _dbContext.ContactTypes.ToListAsync();
        }

        public async Task<ContactType> GetById(int id)
        {
            return await _dbContext.ContactTypes.SingleOrDefaultAsync(e => e.ContactTypeId == id);
        }

        public async Task<IEnumerable<ContactType>> WhereAsync(Expression<Func<ContactType, bool>> exp)
        {
            return await _dbContext.ContactTypes.Where(exp).ToListAsync();
        }

        public async Task<bool> Insert(ContactType entity)
        {
            try
            {
                await _dbContext.ContactTypes.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }

        }

        public async Task<bool> Update(ContactType entity)
        {
            try
            {
                _dbContext.ContactTypes.Update(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<bool> Delete(ContactType entity)
        {
            try
            {
                _dbContext.ContactTypes.Remove(entity);
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
