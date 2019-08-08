using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Domain.Models.Client;
using Domain.Models.Services;
using Domain.Models.Nomenclatoare;

namespace Domain.Models.Services
{
    public class ServiceLocationOperation
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ServiceLocationOperationId { get; set; }

        public decimal Price { get; set; }
        public int Time { get; set; }

        public int ServiceLocationId { get; set; }
        public ServiceLocation ServiceLocation { get; set; }
        public int ServiceOperationId { get; set; }
        public ServiceOperation ServiceOperation { get; set; }

        public ICollection<ServiceLocationAppointment> ServiceLocationAppointments { get; set; }
    }
}
