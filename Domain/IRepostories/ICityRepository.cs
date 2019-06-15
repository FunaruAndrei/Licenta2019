using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Domain.Models.Nomenclatoare;
using Domain.Models.Services;

namespace Domain.IRepostories
{
    public interface ICityRepository
    {
        Task<IEnumerable<City>> GetAllAsync();
        Task<City> GetById(int id);
        Task<IEnumerable<City>> WhereAsync(Expression<Func<City, bool>> exp);
        Task<bool> Insert(City entity);
        Task<bool> Update(City entity);
        Task<bool> Delete(City entity);
    }
}
