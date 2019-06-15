using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Domain.Models.Services;

namespace Domain.IRepostories.ServiceLocationRepositories
{
    public interface IServiceLocationFacilityRepository
    {
        Task<IEnumerable<ServiceLocationFacility>> GetAllAsync();
        Task<ServiceLocationFacility> GetById(int id);
        Task<IEnumerable<ServiceLocationFacility>> WhereAsync(Expression<Func<ServiceLocationFacility, bool>> exp);
        Task<int> Insert(ServiceLocationFacility entity);
        Task<bool> Update(ServiceLocationFacility entity);
        Task<bool> Delete(ServiceLocationFacility entity);
    }
}
