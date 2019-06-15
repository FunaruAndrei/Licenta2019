using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Domain.Models.Nomenclatoare;

namespace Domain.Models.Services
{
    public class ServiceLocation
    {
        [Key]
        public int ServiceLocationId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Address { get; set; }

        public decimal Longitude { get; set; }
        public decimal Latitude { get; set; }
        public int MaxCars { get; set; }

        public int ServiceInfoId { get; set; }
        public ServiceInfo ServiceInfo { get; set; }
        public int CityId { get; set; }
        public City City { get; set; }

        public ICollection<ServicePromotion> ServicePromotions { get; set; }
        public ICollection<ServiceProgram> ServicePrograms { get; set; }
        public ICollection<ServiceLocationPhoto> ServiceLocationPhotos { get; set; }
        public ICollection<ServiceLocationFacility> ServiceLocationFacilities { get; set; }
        public ICollection<ServiceManufacturer> ServiceManufacturers { get; set; }
        public ICollection<ServiceLocationContact> ServiceLocationContacts { get; set; }
        public ICollection<ServiceLocationOperation> ServiceLocationOperations { get; set; }
        public ICollection<ServiceLocationReview> ServiceLocationReviews { get; set; }
    }

}
