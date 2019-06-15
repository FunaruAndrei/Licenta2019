using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Domain.Models.Identity;

namespace Domain.Models.Services
{
    public class ServiceLocationReview
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ServiceLocationReviewId { get; set; }
        [Required]
        public float Rate { get; set; }
        public string Review { get; set; }
        [Required]
        public DateTime DateTime { get; set; }

        public int ServiceLocationId { get; set; }
        public ServiceLocation ServiceLocation { get; set; }

        public int UserEServiceId { get; set; }
      
    }
}
