using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Models.ServicesModels
{
    public class ServiceLocationPhotoViewModel
    {
        public int ServiceLocationPhotoId { get; set; }

        public string Link { get; set; }
        public int Position { get; set; }

        public int ServiceLocationId { get; set; }
    }
}
