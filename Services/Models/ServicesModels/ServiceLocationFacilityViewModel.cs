using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Models.ServicesModels
{
    public class ServiceLocationFacilityViewModel
    {
        public int ServiceLocationFacilityId { get; set; }

        public int ServiceFacilityId { get; set; }
        public int ServiceLocationId { get; set; }
    }
}
