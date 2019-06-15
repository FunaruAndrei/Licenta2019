using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Domain.Models.Nomenclatoare;

namespace Domain.Models.Services
{
   public class ServiceLocationFacility
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ServiceLocationFacilityId { get; set; }

        public int ServiceFacilityId { get; set; }
        public ServiceFacility ServiceFacility { get; set; }
        public int ServiceLocationId { get; set; }
        public ServiceLocation ServiceLocation { get; set; }
    }
}
