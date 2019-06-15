using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Domain.Models.Nomenclatoare;

namespace Domain.IRepostories
{
    public interface IServiceOperationTypeRepository
    {
        Task<IEnumerable<ServiceOperationType>> GetAllAsync();
        Task<ServiceOperationType> GetById(int id);
        Task<IEnumerable<ServiceOperationType>> WhereAsync(Expression<Func<ServiceOperationType, bool>> exp);
        Task<bool> Insert(ServiceOperationType entity);
        Task<bool> Update(ServiceOperationType entity);
        Task<bool> Delete(ServiceOperationType entity);
    }
}
