using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Models.ServicesModels
{
    public class ServiceLocationOperationViewModel
    {
        public int ServiceLocationOperationId { get; set; }

        public decimal Price { get; set; }
        public int Time { get; set; }

        public int ServiceLocationId { get; set; }
        public int ServiceOperationId { get; set; }
    }
}
