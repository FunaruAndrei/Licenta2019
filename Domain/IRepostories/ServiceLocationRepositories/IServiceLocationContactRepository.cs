using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Domain.Models.Services;

namespace Domain.IRepostories.ServiceLocationRepositories
{
    public interface IServiceLocationContactRepository
    {
        Task<IEnumerable<ServiceLocationContact>> GetAllAsync();
        Task<ServiceLocationContact> GetById(int id);
        Task<IEnumerable<ServiceLocationContact>> WhereAsync(Expression<Func<ServiceLocationContact, bool>> exp);
        Task<int> Insert(ServiceLocationContact entity);
        Task<bool> Update(ServiceLocationContact entity);
        Task<bool> Delete(ServiceLocationContact entity);
    }
}
