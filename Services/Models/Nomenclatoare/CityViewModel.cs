using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Models.Nomenclatoare
{
    public class CityViewModel
    {
        public int CityId { get; set; }

        public string Name { get; set; }
        public decimal Longitude { get; set; }
        public decimal Latitude { get; set; }
        public string Judet { get; set; }
        public string JudetAuto { get; set; }
    }
}
