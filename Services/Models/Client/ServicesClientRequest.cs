using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Models.Client
{
    public class ServicesClientRequest
    {
        public float latitude { get; set; }
        public float longitude { get; set; }
        public int? opTypeId { get; set; }
        public int? carManId { get; set; }
        public int[] operations { get; set; }
        public int[] facilites { get; set; }
        public int distance { get; set; }
    }
}
