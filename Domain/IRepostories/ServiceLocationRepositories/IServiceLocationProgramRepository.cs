using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Domain.Models.Services;

namespace Domain.IRepostories.ServiceLocationRepositories
{
    public interface IServiceLocationProgramRepository
    {
        Task<IEnumerable<ServiceProgram>> GetAllAsync();
        Task<ServiceProgram> GetById(int id);
        Task<IEnumerable<ServiceProgram>> WhereAsync(Expression<Func<ServiceProgram, bool>> exp);
        Task<int> Insert(ServiceProgram entity);
        Task<bool> Update(ServiceProgram entity);
        Task<bool> Delete(ServiceProgram entity);
    }
}
