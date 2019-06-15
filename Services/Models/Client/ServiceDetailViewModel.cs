using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Services.Models.ServicesModels;

namespace Services.Models.Client
{
    public class ServiceDetailViewModel
    {
        public ServiceInfoViewModel ServiceInfo { get; set; }
        public ServiceLocationViewModel ServiceLocation { get; set; }
        public IEnumerable<ServiceProgramViewModel> ServiceProgram { get; set; }
        public IEnumerable<ServiceLocationContactViewModel> ServiceContacts { get; set; }
        public IEnumerable<ServiceManufacturerViewModel> ServiceManufacturers { get; set; }
        public IEnumerable<ServiceLocationFacilityViewModel> ServiceFacilities { get; set; }
        public IEnumerable<ServiceLocationOperationViewModel> ServiceOperations { get; set; }
        public IEnumerable<ServiceLocationPhotoViewModel> ServicePhotos { get; set; }
        public IEnumerable<ServiceLocationReviewViewModel> ServiceReviews  { get; set; }
        public IEnumerable<ServicePromotionViewModel> ServicePromotions { get; set; }
    }
}
