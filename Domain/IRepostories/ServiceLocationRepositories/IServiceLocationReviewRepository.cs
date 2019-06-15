using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Domain.Models.Services;

namespace Domain.IRepostories.ServiceLocationRepositories
{
    public interface IServiceLocationReviewRepository
    {
        Task<IEnumerable<ServiceLocationReview>> GetAllAsync();
        Task<ServiceLocationReview> GetById(int id);
        Task<IEnumerable<ServiceLocationReview>> WhereAsync(Expression<Func<ServiceLocationReview, bool>> exp);
        Task<int> Insert(ServiceLocationReview entity);
        Task<bool> Update(ServiceLocationReview entity);
        Task<bool> Delete(ServiceLocationReview entity);
    }
}
