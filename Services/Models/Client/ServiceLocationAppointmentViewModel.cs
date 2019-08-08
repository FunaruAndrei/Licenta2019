using System;
using System.Collections.Generic;
using System.Text;
using Services.Models.Auth;
using Services.Models.Nomenclatoare;
using Services.Models.ServicesModels;

namespace Services.Models.Client
{
    public class ServiceLocationAppointmentViewModel
    {
        public int ServiceLocationAppointmentId { get; set; }
        public int CarYear { get; set; }
        public virtual CarManufacturerViewModel CarManufacturer { get; set; }
        public string CarModel { get; set; }
        public DateTime AppointmentTime { get; set; }
        
        public  ServiceLocationViewModel ServiceLocation { get; set; }
        public ServiceLocationOperationViewModel ServiceLocationOperation { get; set; }

        public  AuthCheckUser User { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
    }
}
