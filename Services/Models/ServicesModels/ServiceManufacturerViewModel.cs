using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Models.ServicesModels
{
    public class ServiceManufacturerViewModel
    {
        public int ServiceManufacturerId { get; set; }

        public int CarManufacturerId { get; set; }
        public int ServiceLocationId { get; set; }
    }
}
