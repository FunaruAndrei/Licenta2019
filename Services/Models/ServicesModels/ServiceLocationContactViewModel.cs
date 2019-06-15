using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Models.ServicesModels
{
    public class ServiceLocationContactViewModel
    {
        public int ServiceLocationContactId { get; set; }

        public string Value { get; set; }

        public int ContactTypeId { get; set; }
        public int ServiceLocationId { get; set; }
    }
}
