using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Domain.Models.Services;

namespace Domain.Models.Nomenclatoare
{
    public class City
    {

        [Key]
        public int CityId { get; set; }

        public string Name { get; set; }
        public decimal Longitude { get; set; }
        public decimal Latitude { get; set; }
        public string Judet { get; set; }
        public string JudetAuto { get; set; }

        public ICollection<ServiceLocation> ServiceLocations { get; set; }
    }
}
