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
    public class CarManufacturerRepository:ICarManufacturerRepository
    {
        private readonly EServiceDbContext _dbContext;

        public CarManufacturerRepository(EServiceDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<CarManufacturer>> GetAllAsync()
        {
            return await _dbContext.CarManufacturers.ToListAsync();
        }

        public async Task<CarManufacturer> GetById(int id)
        {
            return await _dbContext.CarManufacturers.SingleOrDefaultAsync(e => e.CarManufacturerId == id);
        }

        public async Task<IEnumerable<CarManufacturer>> WhereAsync(Expression<Func<CarManufacturer, bool>> exp)
        {
            return await _dbContext.CarManufacturers.Where(exp).ToListAsync();
        }

        public async Task<bool> Insert(CarManufacturer entity)
        {
            try
            {
                await _dbContext.CarManufacturers.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }

        }

        public async Task<bool> Update(CarManufacturer entity)
        {
            try
            {
                _dbContext.CarManufacturers.Update(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<bool> Delete(CarManufacturer entity)
        {
            try
            {
                _dbContext.CarManufacturers.Remove(entity);
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
