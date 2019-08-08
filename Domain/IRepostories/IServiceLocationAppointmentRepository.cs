using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Domain.Models.Client;
using Domain.Models.Services;

namespace Domain.IRepostories
{
    public interface IServiceLocationAppointmentRepository
    {
        Task<IEnumerable<ServiceLocationAppointment>> GetAllAsync();
        Task<ServiceLocationAppointment> GetById(int id);
        Task<IEnumerable<ServiceLocationAppointment>> WhereAsync(Expression<Func<ServiceLocationAppointment, bool>> exp);
        Task<bool> Insert(ServiceLocationAppointment entity);
        Task<bool> Update(ServiceLocationAppointment entity);
        Task<bool> Delete(ServiceLocationAppointment entity);
    }
}
