using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Domain.Models.Nomenclatoare;

namespace Domain.Models.Services
{
    public class ServiceManufacturer
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ServiceManufacturerId { get; set; }

        public int CarManufacturerId { get; set; }
        public CarManufacturer CarManufacturer { get; set; }
        public int ServiceLocationId { get; set; }
        public ServiceLocation ServiceLocation { get; set; }
    }
}
