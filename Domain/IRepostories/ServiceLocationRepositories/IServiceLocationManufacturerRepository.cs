using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Domain.Models.Services;

namespace Domain.IRepostories.ServiceLocationRepositories
{
    public interface IServiceLocationManufacturerRepository
    {
        Task<IEnumerable<ServiceManufacturer>> GetAllAsync();
        Task<ServiceManufacturer> GetById(int id);
        Task<IEnumerable<ServiceManufacturer>> WhereAsync(Expression<Func<ServiceManufacturer, bool>> exp);
        Task<int> Insert(ServiceManufacturer entity);
        Task<bool> Update(ServiceManufacturer entity);
        Task<bool> Delete(ServiceManufacturer entity);
    }
}
