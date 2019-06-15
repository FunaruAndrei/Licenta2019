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
    public class CityRepository:ICityRepository
    {
        private readonly EServiceDbContext _dbContext;

        public CityRepository(EServiceDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<City>> GetAllAsync()
        {
            return await _dbContext.Cities.ToListAsync();
        }

        public async Task<City> GetById(int id)
        {
            return await _dbContext.Cities.SingleOrDefaultAsync(e => e.CityId == id);
        }

        public async Task<IEnumerable<City>> WhereAsync(Expression<Func<City, bool>> exp)
        {
            return await _dbContext.Cities.Where(exp).ToListAsync();
        }

        public async Task<bool> Insert(City entity)
        {
            try
            {
                await _dbContext.Cities.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }

        }

        public async Task<bool> Update(City entity)
        {
            try
            {
                _dbContext.Cities.Update(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<bool> Delete(City entity)
        {
            try
            {
                _dbContext.Cities.Remove(entity);
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
