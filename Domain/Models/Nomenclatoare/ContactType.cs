using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Domain.Models.Services;

namespace Domain.Models.Nomenclatoare
{
    public class ContactType
    {

        [Key]
        public int ContactTypeId { get; set; }
        [Required]
        public string Name { get; set; }
        public string Icon { get; set; }
        public ICollection<ServiceLocationContact> ServiceLocationContacts { get; set; }
    }
}
