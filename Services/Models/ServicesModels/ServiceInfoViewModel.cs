using System;
using System.Collections.Generic;
using System.Text;

namespace Services.Models.ServicesModels
{
    public class ServiceInfoViewModel
    {
        public int ServiceInfoId { get; set; }
        public string Nume { get; set; }
        public string AdresaSediuSocial { get; set; }
        public string NumeDelegat { get; set; }
        public string TelefonDelegat { get; set; }
        public string EmailDelegat { get; set; }
        public string Descriere { get; set; }
        public string Logo { get; set; }
        public int UserId { get; set; }
    }
}
