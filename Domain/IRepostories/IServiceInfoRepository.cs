using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Domain.Models.Services;

namespace Domain.IRepostories
{
    public interface IServiceInfoRepository
    {
        Task<IEnumerable<ServiceInfo>> GetAllAsync();
        Task<ServiceInfo> GetById(int id);
        Task<IEnumerable<ServiceInfo>> WhereAsync(Expression<Func<ServiceInfo, bool>> exp);
        Task<bool> Insert(ServiceInfo entity);
        Task<bool> Update(ServiceInfo entity);
        Task<bool> Delete(ServiceInfo entity);
    }
}
