using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Domain.Models.Services;

namespace Domain.Models.Nomenclatoare
{
    public class ServiceFacility
    {

        [Key]
        public int ServiceFacilityId { get; set; }

        public string Name { get; set; }
        public string Icon { get; set; }

        public ICollection<ServiceLocationFacility> ServiceLocationFacilities { get; set; }
    }
}
