using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Domain.Models.Services;

namespace Domain.Models.Nomenclatoare
{
    public class ServiceOperation
    {

        [Key]
        public int ServiceOperationId { get; set; }
        [Required]
        public string Name { get; set; }
        public string Icon { get; set; }

        public ServiceOperationType ServiceOperationType { get; set; }
        public ICollection<ServiceLocationOperation> ServiceLocationOperations { get; set; }
    }
}
