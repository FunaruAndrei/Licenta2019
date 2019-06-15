using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Domain.Models.Nomenclatoare;

namespace Domain.IRepostories
{
    public interface IContactTypeRepository
    {
        Task<IEnumerable<ContactType>> GetAllAsync();
        Task<ContactType> GetById(int id);
        Task<IEnumerable<ContactType>> WhereAsync(Expression<Func<ContactType, bool>> exp);
        Task<bool> Insert(ContactType entity);
        Task<bool> Update(ContactType entity);
        Task<bool> Delete(ContactType entity);
    }
}
