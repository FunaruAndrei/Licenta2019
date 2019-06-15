using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Domain.Models.Services
{
    public class ServiceProgram
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ServiceProgramId { get; set; }

        public int WeekDay { get; set; }
        public int OpenHour { get; set; }
        public int OpenMinute { get; set; }
        public int CloseHour { get; set; }
        public int CloseMinute { get; set; }

        public int ServiceLocationId { get; set; }
        public ServiceLocation ServiceLocation { get; set; }
    }
}
