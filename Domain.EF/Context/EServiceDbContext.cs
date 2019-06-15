using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.EF.Models.Identity;
using Domain.Models.Nomenclatoare;
using Domain.Models.Services;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Domain.EF.Context
{
    public class EServiceDbContext:IdentityDbContext<EServiceUser, EServiceRole, int>
    {
        public EServiceDbContext(DbContextOptions<EServiceDbContext> options)
            : base(options)
        {
        }

        public DbSet<CarManufacturer> CarManufacturers { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<ContactType> ContactTypes { get; set; }
        public DbSet<ServiceFacility> ServiceFacilities { get; set; }
        public DbSet<ServiceOperation> ServiceOperations { get; set; }
        public DbSet<ServiceOperationType> ServiceOperationTypes { get; set; }

        public DbSet<ServiceInfo> ServiceInfos { get; set; }
        public DbSet<ServiceLocation> ServiceLocations { get; set; }
        public DbSet<ServiceLocationContact> ServiceLocationContacts { get; set; }
        public DbSet<ServiceLocationFacility> ServiceLocationFacilities { get; set; }
        public DbSet<ServiceLocationOperation> ServiceLocationOperations { get; set; }
        public DbSet<ServiceLocationPhoto> ServiceLocationPhotos { get; set; }
        public DbSet<ServiceLocationReview> ServiceLocationReviews { get; set; }
        public DbSet<ServiceManufacturer> ServiceManufacturers { get; set; }
        public DbSet<ServiceProgram> ServicePrograms { get; set; }
        public DbSet<ServicePromotion> ServicePromotions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ServiceInfo>()
                .HasMany(e => e.ServiceLocations)
                .WithOne(e => e.ServiceInfo)
                .IsRequired();

            modelBuilder.Entity<ServiceLocation>(e =>
            {
                e.Property(z => z.Latitude).HasColumnType("decimal(18, 9)");
                e.Property(z => z.Longitude).HasColumnType("decimal(18, 9)");
            });

            modelBuilder.Entity<City>(e =>
            {
                e.Property(z => z.Latitude).HasColumnType("decimal(18, 9)");
                e.Property(z => z.Longitude).HasColumnType("decimal(18, 9)");
            });

            modelBuilder.Entity<ServiceLocationOperation>(e =>
            {
                e.Property(z => z.Price).HasColumnType("decimal(18, 9)");
            });

            modelBuilder.Entity<ServiceLocationFacility>()
                .HasKey(bc => new { bc.ServiceLocationFacilityId, bc.ServiceLocationId, bc.ServiceFacilityId });
            modelBuilder.Entity<ServiceLocationFacility>()
                .HasOne(bc => bc.ServiceLocation)
                .WithMany(b => b.ServiceLocationFacilities)
                .HasForeignKey(bc => bc.ServiceLocationId);
            modelBuilder.Entity<ServiceLocationFacility>()
                .HasOne(bc => bc.ServiceFacility)
                .WithMany(c => c.ServiceLocationFacilities)
                .HasForeignKey(bc => bc.ServiceFacilityId);

            modelBuilder.Entity<ServiceLocation>()
                .HasMany(e => e.ServicePromotions)
                .WithOne(e => e.ServiceLocation);

            modelBuilder.Entity<ServiceLocation>()
                .HasMany(e => e.ServiceLocationPhotos)
                .WithOne(e => e.ServiceLocation);

            modelBuilder.Entity<ServiceLocation>()
                .HasMany(e => e.ServicePrograms)
                .WithOne(e => e.ServiceLocation);

            modelBuilder.Entity<ServiceManufacturer>()
                .HasKey(bc => new { bc.ServiceManufacturerId, bc.ServiceLocationId, bc.CarManufacturerId });
            modelBuilder.Entity<ServiceManufacturer>()
                .HasOne(bc => bc.ServiceLocation)
                .WithMany(b => b.ServiceManufacturers)
                .HasForeignKey(bc => bc.ServiceLocationId);
            modelBuilder.Entity<ServiceManufacturer>()
                .HasOne(bc => bc.CarManufacturer)
                .WithMany(c => c.ServiceManufacturers)
                .HasForeignKey(bc => bc.CarManufacturerId);

            modelBuilder.Entity<ServiceLocationContact>()
                .HasKey(bc => new { bc.ServiceLocationContactId, bc.ServiceLocationId, bc.ContactTypeId });
            modelBuilder.Entity<ServiceLocationContact>()
                .HasOne(bc => bc.ServiceLocation)
                .WithMany(b => b.ServiceLocationContacts)
                .HasForeignKey(bc => bc.ServiceLocationId);
            modelBuilder.Entity<ServiceLocationContact>()
                .HasOne(bc => bc.ContactType)
                .WithMany(c => c.ServiceLocationContacts)
                .HasForeignKey(bc => bc.ContactTypeId);

            modelBuilder.Entity<City>()
                .HasMany(e => e.ServiceLocations)
                .WithOne(e => e.City);

            modelBuilder.Entity<ServiceOperationType>()
                .HasMany(e => e.ServiceOperations)
                .WithOne(e => e.ServiceOperationType);

            modelBuilder.Entity<ServiceLocationOperation>()
                .HasKey(bc => new { bc.ServiceLocationOperationId, bc.ServiceLocationId, bc.ServiceOperationId });
            modelBuilder.Entity<ServiceLocationOperation>()
                .HasOne(bc => bc.ServiceLocation)
                .WithMany(b => b.ServiceLocationOperations)
                .HasForeignKey(bc => bc.ServiceLocationId);
            modelBuilder.Entity<ServiceLocationOperation>()
                .HasOne(bc => bc.ServiceOperation)
                .WithMany(c => c.ServiceLocationOperations)
                .HasForeignKey(bc => bc.ServiceOperationId);

            modelBuilder.Entity<ServiceLocation>()
                .HasMany(e => e.ServiceLocationReviews)
                .WithOne(e => e.ServiceLocation);
        }

    }
}
