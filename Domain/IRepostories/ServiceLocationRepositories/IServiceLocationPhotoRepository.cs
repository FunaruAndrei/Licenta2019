using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Domain.Models.Services;

namespace Domain.IRepostories.ServiceLocationRepositories
{
    public interface IServiceLocationPhotoRepository
    {
        Task<IEnumerable<ServiceLocationPhoto>> GetAllAsync();
        Task<ServiceLocationPhoto> GetById(int id);
        Task<IEnumerable<ServiceLocationPhoto>> WhereAsync(Expression<Func<ServiceLocationPhoto, bool>> exp);
        Task<int> Insert(ServiceLocationPhoto entity);
        Task<bool> Update(ServiceLocationPhoto entity);
        Task<bool> Delete(ServiceLocationPhoto entity);
    }
}
