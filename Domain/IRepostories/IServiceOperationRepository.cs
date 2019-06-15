using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Domain.Models.Nomenclatoare;

namespace Domain.IRepostories
{
    public interface IServiceOperationRepository
    {
        Task<IEnumerable<ServiceOperation>> GetAllAsync();
        Task<ServiceOperation> GetById(int id);
        Task<IEnumerable<ServiceOperation>> WhereAsync(Expression<Func<ServiceOperation, bool>> exp);
        Task<bool> Insert(ServiceOperation entity);
        Task<bool> Update(ServiceOperation entity);
        Task<bool> Delete(ServiceOperation entity);
    }
}
