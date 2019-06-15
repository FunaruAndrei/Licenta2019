using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Domain.Models.Services;
using Domain.Models.Nomenclatoare;

namespace Domain.Models.Services
{
    public class ServiceLocationContact
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ServiceLocationContactId { get; set; }

        public string Value { get; set; }

        public int ContactTypeId { get; set; }
        public ContactType ContactType { get; set; }
        public int ServiceLocationId { get; set; }
        public ServiceLocation ServiceLocation { get; set; }
    }
}
