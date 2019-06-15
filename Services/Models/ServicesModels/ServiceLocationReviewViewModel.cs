using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Models.ServicesModels
{
    public class ServiceLocationReviewViewModel
    {
        public int ServiceLocationReviewId { get; set; }
      
        public float Rate { get; set; }
        public string Review { get; set; }
        public DateTime DateTime { get; set; }

        public int ServiceLocationId { get; set; }

        public int UserEServiceId { get; set; }
    }
}
