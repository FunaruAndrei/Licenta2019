using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Domain.Models.Services;

namespace Domain.Models.Nomenclatoare
{
    public class CarManufacturer
    {

        [Key]
        public int CarManufacturerId { get; set; }

        public string Name { get; set; }
        public string Icon { get; set; }
        public ICollection<ServiceManufacturer> ServiceManufacturers { get; set; }
    }
}
