using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain.Azure;
using Domain.EF.Repositories;
using Domain.EF.Repositories.ServiceLocationRepositories;
using Domain.EF.Repositories.ServiceLocationReviewRepositories;
using Domain.EF.Utility;
using Domain.IRepostories;
using Domain.IRepostories.ServiceLocationRepositories;
using Domain.Models.Nomenclatoare;
using Services;
using Services.Implementations.Services;
using Microsoft.Extensions.DependencyInjection;
using Services.Services;

namespace eService.Infrastructure
{
    public static class Installer
    {
        public static void ConfigureServices(IServiceCollection services)
        {
            //Services
            services.AddTransient<IAuthCheckService, AuthCheckService>();
            services.AddTransient<IGeneralInfoService, GeneralInfoService>();
            services.AddTransient<INomenclatoareService, NomenclatoareService>();
            services.AddTransient<ILocationInfoService, LocationInfoService>();
            services.AddTransient<ILocationContactService, LocationContactService>();
            services.AddTransient<ILocationFacilityService, LocationFacilityService>();
            services.AddTransient<ILocationProgramService, LocationProgramService>();
            services.AddTransient<ILocationManufacturerService, LocationManufacturerService>();
            services.AddTransient<ILocationOperationsService, LocationOperationsService>();
            services.AddTransient<ILocationPhotoService, LocationPhotoService>();
            services.AddTransient<ISearchPageService, SearchPageService>();
            services.AddTransient<IServicesClientService, ServicesClientService>();
            services.AddTransient<IAppointmentService, AppointmentService>();

            //Repositories
            services.AddTransient< IServiceInfoRepository, ServiceInfoRepository>();
            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<ICarManufacturerRepository, CarManufacturerRepository>();
            services.AddTransient<ICityRepository, CityRepository>();
            services.AddTransient<IContactTypeRepository, ContactTypeRepository>();
            services.AddTransient<IServiceFacilityRepository, ServiceFacilityRepository>();
            services.AddTransient<IServiceOperationRepository, ServiceOperationRepository>();
            services.AddTransient<IServiceOperationTypeRepository, ServiceOperationTypeRepository>();
            services.AddTransient<IFileRepository, FileRepository>();

            //Service location repositories
            services.AddTransient<IServiceLocationRepository, ServiceLocationRepository>();
            services.AddTransient<IServiceLocationContactRepository, ServiceLocationContactRepository>();
            services.AddTransient<IServiceLocationFacilityRepository, ServiceLocationFacilityRepository>();
            services.AddTransient<IServiceLocationManufacturerRepository, ServiceLocationManufacturerRepository>();
            services.AddTransient<IServiceLocationOperationRepository, ServiceLocationOperationRepository>();
            services.AddTransient<IServiceLocationPhotoRepository, ServiceLocationPhotoRepository>();
            services.AddTransient<IServiceLocationProgramRepository, ServiceLocationProgramRepository>();
            services.AddTransient<IServiceLocationReviewRepository, ServiceLocationReviewRepository>();

            services.AddTransient<IServiceLocationAppointmentRepository, ServiceLocationAppointmentRepository>();
        }
    }
}
