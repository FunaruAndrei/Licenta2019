using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Models.Client
{
    public class ServiceClientViewModel
    {
        public int LocationId { get; set; }
        public string Name { get; set; }
        public int NoImages { get; set; }
        public string Image { get; set; }
        public double Distance { get; set; }
        public string Address { get; set; }
        public double ReviewAvg { get; set; }
        public int Comments { get; set; }
        public double Longitude { get; set; }
        public double Latitude { get; set; }
    }
}
