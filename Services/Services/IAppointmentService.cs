using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Services.Models.Client;

namespace Services.Services
{
    public interface IAppointmentService
    {
        Task<IEnumerable<DateTime>> GetValidTimeForDay(int serviceLocationId, DateTime day);
        Task<bool> AddAppointment(ServiceLocationAppointmentViewModel appointment);
    }
}
