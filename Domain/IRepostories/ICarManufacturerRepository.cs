using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Domain.Models.Nomenclatoare;

namespace Domain.IRepostories
{
    public interface ICarManufacturerRepository
    {
        Task<IEnumerable<CarManufacturer>> GetAllAsync();
        Task<CarManufacturer> GetById(int id);
        Task<IEnumerable<CarManufacturer>> WhereAsync(Expression<Func<CarManufacturer, bool>> exp);
        Task<bool> Insert(CarManufacturer entity);
        Task<bool> Update(CarManufacturer entity);
        Task<bool> Delete(CarManufacturer entity);
    }
}
