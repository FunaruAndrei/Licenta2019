using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Domain.Models.Nomenclatoare;

namespace Domain.IRepostories
{
    public interface IServiceFacilityRepository
    {
        Task<IEnumerable<ServiceFacility>> GetAllAsync();
        Task<ServiceFacility> GetById(int id);
        Task<IEnumerable<ServiceFacility>> WhereAsync(Expression<Func<ServiceFacility, bool>> exp);
        Task<bool> Insert(ServiceFacility entity);
        Task<bool> Update(ServiceFacility entity);
        Task<bool> Delete(ServiceFacility entity);
    }
}
