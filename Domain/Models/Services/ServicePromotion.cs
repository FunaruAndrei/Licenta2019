using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Domain.Models.Services
{
    public class ServicePromotion
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ServicePromotionId { get; set; }

        public string Description { get; set; }
        public string Image { get; set; }

        public int ServiceLocationId { get; set; }
        public ServiceLocation ServiceLocation { get; set; }
    }
}
