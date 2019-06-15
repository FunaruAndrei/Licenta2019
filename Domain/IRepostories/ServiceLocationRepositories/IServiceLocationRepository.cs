using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Domain.Models.Services;

namespace Domain.IRepostories.ServiceLocationRepositories
{
    public interface IServiceLocationRepository
    {
        Task<IEnumerable<ServiceLocation>> GetAllAsync();
        Task<IEnumerable<ServiceLocation>> GetAllIncludeAsync();
        Task<ServiceLocation> GetById(int id);
        Task<IEnumerable<ServiceLocation>> WhereAsync(Expression<Func<ServiceLocation, bool>> exp);
        Task<int> Insert(ServiceLocation entity);
        Task<bool> Update(ServiceLocation entity);
        Task<bool> Delete(ServiceLocation entity);
    }
}
