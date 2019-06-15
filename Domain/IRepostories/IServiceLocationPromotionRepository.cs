using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Domain.Models.Services;

namespace Domain.IRepostories
{
    public interface IServiceLocationPromotionRepository
    {
        Task<IEnumerable<ServicePromotion>> GetAllAsync();
        Task<ServicePromotion> GetById(int id);
        Task<IEnumerable<ServicePromotion>> WhereAsync(Expression<Func<ServicePromotion, bool>> exp);
        Task<bool> Insert(ServicePromotion entity);
        Task<bool> Update(ServicePromotion entity);
        Task<bool> Delete(ServicePromotion entity);
    }
}
