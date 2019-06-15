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
    public class ServiceLocationPhotoRepository:IServiceLocationPhotoRepository
    {
        private readonly EServiceDbContext _dbContext;

        public ServiceLocationPhotoRepository(EServiceDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<ServiceLocationPhoto>> GetAllAsync()
        {
            return await _dbContext.ServiceLocationPhotos.ToListAsync();
        }

        public async Task<ServiceLocationPhoto> GetById(int id)
        {
            return await _dbContext.ServiceLocationPhotos.SingleOrDefaultAsync(e => e.ServiceLocationPhotoId == id);
        }

        public async Task<IEnumerable<ServiceLocationPhoto>> WhereAsync(Expression<Func<ServiceLocationPhoto, bool>> exp)
        {
            return await _dbContext.ServiceLocationPhotos.Where(exp).ToListAsync();
        }

        public async Task<int> Insert(ServiceLocationPhoto entity)
        {
            try
            {
                await _dbContext.ServiceLocationPhotos.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return entity.ServiceLocationPhotoId;
            }
            catch (Exception e)
            {
                return 0;
            }

        }

        public async Task<bool> Update(ServiceLocationPhoto entity)
        {
            try
            {
                _dbContext.ServiceLocationPhotos.Update(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<bool> Delete(ServiceLocationPhoto entity)
        {
            try
            {
                _dbContext.ServiceLocationPhotos.Remove(entity);
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
