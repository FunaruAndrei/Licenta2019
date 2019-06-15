using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Models.ServicesModels
{
    public class ServiceProgramViewModel
    {
        public int ServiceProgramId { get; set; }

        public int WeekDay { get; set; }
        public int OpenHour { get; set; }
        public int OpenMinute { get; set; }
        public int CloseHour { get; set; }
        public int CloseMinute { get; set; }

        public int ServiceLocationId { get; set; }
    }
}
