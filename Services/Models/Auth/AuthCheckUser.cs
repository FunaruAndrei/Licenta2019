using System;
using System.Collections.Generic;
using System.Text;

namespace Services.Models.Auth
{
    public class AuthCheckUser
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
    }
}
