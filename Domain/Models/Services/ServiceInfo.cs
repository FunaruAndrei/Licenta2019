using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Domain.Models.Services
{
    public class ServiceInfo
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ServiceInfoId { get; set; }
        [Required]
        public string Nume { get; set; }
        public string AdresaSediuSocial { get; set; }
        [Required]
        public string NumeDelegat { get; set; }
        [Required]
        public string TelefonDelegat { get; set; }
        public string EmailDelegat { get; set; }
        public string Descriere { get; set; }
        public string Logo { get; set; }
        public int UserId { get; set; }

        public ICollection<ServiceLocation> ServiceLocations { get; set; }
    }
}
