using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Domain.Models.Nomenclatoare
{
    public class ServiceOperationType
    {

        [Key]
        public int ServiceOperationTypeId { get; set; }
        [Required]
        public string Name { get; set; }

        public string Icon { get; set; }

        public ICollection<ServiceOperation> ServiceOperations { get; set; }
    }
}
