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

namespace Domain.EF.Repositories.ServiceLocationReviewRepositories
{
    public class ServiceLocationReviewRepository:IServiceLocationReviewRepository
    {
        private readonly EServiceDbContext _dbContext;

        public ServiceLocationReviewRepository(EServiceDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<ServiceLocationReview>> GetAllAsync()
        {
            return await _dbContext.ServiceLocationReviews.ToListAsync();
        }

        public async Task<ServiceLocationReview> GetById(int id)
        {
            return await _dbContext.ServiceLocationReviews.SingleOrDefaultAsync(e => e.ServiceLocationReviewId == id);
        }

        public async Task<IEnumerable<ServiceLocationReview>> WhereAsync(Expression<Func<ServiceLocationReview, bool>> exp)
        {
            return await _dbContext.ServiceLocationReviews.Where(exp).ToListAsync();
        }

        public async Task<int> Insert(ServiceLocationReview entity)
        {
            try
            {
                await _dbContext.ServiceLocationReviews.AddAsync(entity);
                await _dbContext.SaveChangesAsync();
                return entity.ServiceLocationReviewId;
            }
            catch (Exception e)
            {
                return 0;
            }

        }

        public async Task<bool> Update(ServiceLocationReview entity)
        {
            try
            {
                _dbContext.ServiceLocationReviews.Update(entity);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<bool> Delete(ServiceLocationReview entity)
        {
            try
            {
                _dbContext.ServiceLocationReviews.Remove(entity);
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
