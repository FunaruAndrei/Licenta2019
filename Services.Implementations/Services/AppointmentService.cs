using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Domain.IRepostories;
using Domain.IRepostories.ServiceLocationRepositories;
using Domain.Models.Client;
using Services.Models.Client;
using Services.Services;

namespace Services.Implementations.Services
{
    public class AppointmentService:IAppointmentService
    {
        private readonly IMapper _mapper;
        private readonly IServiceLocationAppointmentRepository _appointmentRepository;
        private readonly IServiceLocationProgramRepository _programRepository;

        public AppointmentService(IMapper mapper,
            IServiceLocationAppointmentRepository appointmentRepository,
            IServiceLocationProgramRepository programRepository)
        {
            _mapper = mapper;
            _appointmentRepository = appointmentRepository;
            _programRepository = programRepository;
        }
        public async Task<IEnumerable<DateTime>> GetValidTimeForDay(int serviceLocationId, DateTime day)
        {
            var appointments = _appointmentRepository.WhereAsync(e =>
                e.ServiceLocationId == serviceLocationId && e.AppointmentTime.Date == day.Date);

            var program = _programRepository.WhereAsync(e => e.ServiceLocationId == serviceLocationId);

            return null;

        }

        public async Task<bool> AddAppointment(ServiceLocationAppointmentViewModel appointment)
        {
            return await _appointmentRepository.Insert(_mapper
                .Map<ServiceLocationAppointmentViewModel, ServiceLocationAppointment>(appointment));
        }
    }
}
