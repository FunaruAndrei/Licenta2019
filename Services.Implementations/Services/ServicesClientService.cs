using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Domain.IRepostories.ServiceLocationRepositories;
using Domain.Models.Services;
using Services.Models.Client;
using Services.Services;
using GeoCoordinatePortable;
using Services.Models.ServicesModels;

namespace Services.Implementations.Services
{
    public class ServicesClientService : IServicesClientService
    {
        private readonly IMapper _mapper;
        private readonly IServiceLocationRepository _locationRepository;

        public ServicesClientService(
            IMapper mapper,
            IServiceLocationRepository locationRepository)
        {
            _mapper = mapper;
            _locationRepository = locationRepository;
        }

        public async Task<IEnumerable<ServiceClientViewModel>> GetServices(ServicesClientRequest req)
        {
            GeoCoordinate reqCoordinate = new GeoCoordinate(req.latitude, req.longitude);

            var allServiceLocations = await _locationRepository.GetAllIncludeAsync();

            var x = allServiceLocations.Where(e =>
            {
                GeoCoordinate geo = new GeoCoordinate((double) e.Latitude, (double) e.Longitude);
                double distanceBetween = reqCoordinate.GetDistanceTo(geo);

                if (distanceBetween / 1000 > req.distance)
                {
                    return false;
                }

                if (req.operations.Length > 0)
                {
                    if (!e.ServiceLocationOperations.Any(z => req.operations.Any(m => m == z.ServiceOperationId)))
                    {
                        return false;
                    }
                }
                else
                {
                    if (req.opTypeId != null)
                    {
                        if (!e.ServiceLocationOperations.Any(z =>
                            z.ServiceOperation.ServiceOperationType.ServiceOperationTypeId == req.opTypeId))
                        {
                            return false;
                        }
                    }
                }

                if (req.facilites.Length > 0)
                {
                    if (!e.ServiceLocationFacilities.Any(z => req.facilites.Any(m => m == z.ServiceFacilityId)))
                    {
                        return false;
                    }
                }

                if (req.carManId != null)
                {
                    if (!e.ServiceManufacturers.Any(z => z.CarManufacturerId == req.carManId))
                    {
                        return false;
                    }
                }

                return true;

            }).Select(e=> new ServiceClientViewModel()
            {
                LocationId = e.ServiceLocationId,
                Name = e.ServiceInfo.Nume,
                Address =  e.Address,
                Distance = GetDistance(reqCoordinate, e.Latitude, e.Longitude),
                Image =  e.ServiceLocationPhotos.FirstOrDefault().Link,
                NoImages = e.ServiceLocationPhotos.Count(),
                ReviewAvg =  e.ServiceLocationReviews.Select(z=>z.Rate).DefaultIfEmpty(0).Average(),
                Comments = e.ServiceLocationReviews.Count(z => z.Review.Length > 0),
                Longitude =  (double)e.Longitude,
                Latitude = (double)e.Latitude
            });

            return x;
        }

        public async Task<ServiceDetailViewModel> GetServiceById(int id)
        {
            ServiceLocation service = await _locationRepository.GetById(id);

            return new ServiceDetailViewModel()
            {
                ServiceLocation = _mapper.Map<ServiceLocation, ServiceLocationViewModel>(service),
                ServiceInfo = _mapper.Map<ServiceInfo, ServiceInfoViewModel>(service.ServiceInfo),
                ServiceProgram = _mapper.Map<ICollection<ServiceProgram>, ICollection<ServiceProgramViewModel>>(service.ServicePrograms),
                ServiceContacts = _mapper.Map<ICollection<ServiceLocationContact>, ICollection<ServiceLocationContactViewModel>>(service.ServiceLocationContacts),
                ServicePromotions = _mapper.Map<ICollection<ServicePromotion>, ICollection<ServicePromotionViewModel>>(service.ServicePromotions),
                ServiceManufacturers = _mapper.Map<ICollection<ServiceManufacturer>, ICollection<ServiceManufacturerViewModel>>(service.ServiceManufacturers),
                ServiceOperations = _mapper.Map<ICollection<ServiceLocationOperation>, ICollection<ServiceLocationOperationViewModel>>(service.ServiceLocationOperations),
                ServiceFacilities = _mapper.Map<ICollection<ServiceLocationFacility>, ICollection<ServiceLocationFacilityViewModel>>(service.ServiceLocationFacilities),
                ServicePhotos = _mapper.Map<ICollection<ServiceLocationPhoto>, ICollection<ServiceLocationPhotoViewModel>>(service.ServiceLocationPhotos),
                ServiceReviews = _mapper.Map<ICollection<ServiceLocationReview>, ICollection<ServiceLocationReviewViewModel>>(service.ServiceLocationReviews)


            };
        }

        private double GetDistance(GeoCoordinate reqCoordinate, decimal el_lat, decimal el_long)
        {
            GeoCoordinate geo = new GeoCoordinate((double)el_lat, (double)el_long);
            return reqCoordinate.GetDistanceTo(geo)/1000;
        }
    }
}
