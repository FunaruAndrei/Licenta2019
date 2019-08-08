using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Domain.Models.Nomenclatoare;
using Domain.Models.Services;

namespace Domain.Models.Client
{
    public class ServiceLocationAppointment
    {
        [Key]
        public int ServiceLocationAppointmentId { get; set; }
        public int CarYear { get; set; }
        public int CarManufacturerId { get; set; }
        public virtual CarManufacturer CarManufacturer { get; set; }
        public string CarModel { get; set; }

        public DateTime AppointmentTime { get; set; }

        public  int ServiceLocationId { get; set; }
        public  virtual  ServiceLocation ServiceLocation { get; set; }

        public int ServiceLocationOperationId { get; set; }
        public virtual ServiceLocationOperation ServiceLocationOperation { get; set; }

        public int EServiceUserId { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
    }
}
