using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Domain.Models.Services
{
    public class ServiceLocationPhoto
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ServiceLocationPhotoId { get; set; }

        public string Link { get; set; }
        public int Position { get; set; }

        public int ServiceLocationId { get; set; }
        public ServiceLocation ServiceLocation { get; set; }

    }
}
