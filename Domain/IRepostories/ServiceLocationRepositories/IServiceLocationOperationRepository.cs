using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Domain.Models.Services;

namespace Domain.IRepostories.ServiceLocationRepositories
{
    public interface IServiceLocationOperationRepository
    {
        Task<IEnumerable<ServiceLocationOperation>> GetAllAsync();
        Task<ServiceLocationOperation> GetById(int id);
        Task<IEnumerable<ServiceLocationOperation>> WhereAsync(Expression<Func<ServiceLocationOperation, bool>> exp);
        Task<int> Insert(ServiceLocationOperation entity);
        Task<bool> Update(ServiceLocationOperation entity);
        Task<bool> Delete(ServiceLocationOperation entity);
    }
}
