using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Services.Models.Nomenclatoare;

namespace Services.Models.ServicesModels
{
    public class ServiceLocationViewModel
    {
        public int ServiceLocationId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }

        public decimal Longitude { get; set; }
        public decimal Latitude { get; set; }
        public int MaxCars { get; set; }

        public int ServiceInfoId { get; set; }
        public int CityId { get; set; }
        public CityViewModel City { get; set; }
    }
}
