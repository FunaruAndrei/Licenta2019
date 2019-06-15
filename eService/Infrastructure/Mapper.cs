using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using Domain;
using Domain.EF.Models.Identity;
using Domain.Models.Identity;
using Domain.Models.Nomenclatoare;
using Domain.Models.Services;
using Services.Models.Auth;
using Services.Models.Nomenclatoare;
using Services.Models.ServicesModels;

namespace Domain.EF.Utility
{
    public class MappingProfile: Profile
    {
        public MappingProfile()
        {
            CreateMap<UserEService, EServiceUser>();
            CreateMap<EServiceUser, UserEService>();

            CreateMap<UserEService, AuthCheckUser>();
            CreateMap<AuthCheckUser, UserEService>();

            CreateMap<ServiceInfo, ServiceInfoViewModel>();
            CreateMap<ServiceInfoViewModel, ServiceInfo>();

            CreateMap<CarManufacturer, CarManufacturerViewModel>();
            CreateMap<CarManufacturerViewModel, CarManufacturer>();

            CreateMap<City, CityViewModel>();
            CreateMap<CityViewModel, City>();

            CreateMap<ContactType, ContactTypeViewModel>();
            CreateMap<ContactTypeViewModel, ContactType>();

            CreateMap<ServiceFacility, ServiceFacilityViewModel>();
            CreateMap<ServiceFacilityViewModel, ServiceFacility>();

            CreateMap<ServiceOperationType, ServiceOperationTypeViewModel>();
            CreateMap<ServiceOperationTypeViewModel, ServiceOperationType>();

            CreateMap<ServiceOperation, ServiceOperationViewModel>();
            CreateMap<ServiceOperationViewModel, ServiceOperation>();


            CreateMap<ServiceLocation, ServiceLocationViewModel>();
            CreateMap<ServiceLocationViewModel, ServiceLocation>();

            CreateMap<ServiceLocationContact, ServiceLocationContactViewModel>();
            CreateMap<ServiceLocationContactViewModel, ServiceLocationContact>();

            CreateMap<ServiceLocationFacility, ServiceLocationFacilityViewModel>();
            CreateMap<ServiceLocationFacilityViewModel, ServiceLocationFacility>();

            CreateMap<ServiceLocationOperation, ServiceLocationOperationViewModel>();
            CreateMap<ServiceLocationOperationViewModel, ServiceLocationOperation>();

            CreateMap<ServiceLocationPhoto, ServiceLocationPhotoViewModel>();
            CreateMap<ServiceLocationPhotoViewModel, ServiceLocationPhoto>();

            CreateMap<ServiceLocationReview, ServiceLocationReviewViewModel>();
            CreateMap<ServiceLocationReviewViewModel, ServiceLocationReview>();

            CreateMap<ServiceManufacturer, ServiceManufacturerViewModel>();
            CreateMap<ServiceManufacturerViewModel, ServiceManufacturer>();

            CreateMap<ServiceProgram, ServiceProgramViewModel>();
            CreateMap<ServiceProgramViewModel, ServiceProgram>();

            CreateMap<ServicePromotion, ServicePromotionViewModel>();
            CreateMap<ServicePromotionViewModel, ServicePromotion>();
        }
    }
}
