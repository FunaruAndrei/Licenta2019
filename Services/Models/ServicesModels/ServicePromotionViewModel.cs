using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Models.ServicesModels
{
    public class ServicePromotionViewModel
    {
        public int ServicePromotionId { get; set; }

        public string Description { get; set; }
        public string Image { get; set; }

        public int ServiceLocationId { get; set; }
    }
}
