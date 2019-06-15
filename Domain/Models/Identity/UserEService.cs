using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Models.Identity
{
    public class UserEService
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
    }
}
