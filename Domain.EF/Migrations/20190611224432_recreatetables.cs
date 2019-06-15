using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Domain.EF.Migrations
{
    public partial class recreatetables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserName = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    SecurityStamp = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CarManufacturers",
                columns: table => new
                {
                    CarManufacturerId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Icon = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarManufacturers", x => x.CarManufacturerId);
                });

            migrationBuilder.CreateTable(
                name: "Cities",
                columns: table => new
                {
                    CityId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Longitude = table.Column<decimal>(type: "decimal(18, 9)", nullable: false),
                    Latitude = table.Column<decimal>(type: "decimal(18, 9)", nullable: false),
                    Judet = table.Column<string>(nullable: true),
                    JudetAuto = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cities", x => x.CityId);
                });

            migrationBuilder.CreateTable(
                name: "ContactTypes",
                columns: table => new
                {
                    ContactTypeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: false),
                    Icon = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactTypes", x => x.ContactTypeId);
                });

            migrationBuilder.CreateTable(
                name: "ServiceFacilities",
                columns: table => new
                {
                    ServiceFacilityId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Icon = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceFacilities", x => x.ServiceFacilityId);
                });

            migrationBuilder.CreateTable(
                name: "ServiceInfos",
                columns: table => new
                {
                    ServiceInfoId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nume = table.Column<string>(nullable: false),
                    AdresaSediuSocial = table.Column<string>(nullable: true),
                    NumeDelegat = table.Column<string>(nullable: false),
                    TelefonDelegat = table.Column<string>(nullable: false),
                    EmailDelegat = table.Column<string>(nullable: true),
                    Descriere = table.Column<string>(nullable: true),
                    Logo = table.Column<string>(nullable: true),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceInfos", x => x.ServiceInfoId);
                });

            migrationBuilder.CreateTable(
                name: "ServiceOperationTypes",
                columns: table => new
                {
                    ServiceOperationTypeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: false),
                    Icon = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceOperationTypes", x => x.ServiceOperationTypeId);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    RoleId = table.Column<int>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<int>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(nullable: false),
                    ProviderKey = table.Column<string>(nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false),
                    RoleId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false),
                    LoginProvider = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ServiceLocations",
                columns: table => new
                {
                    ServiceLocationId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: false),
                    Address = table.Column<string>(nullable: false),
                    Longitude = table.Column<decimal>(type: "decimal(18, 9)", nullable: false),
                    Latitude = table.Column<decimal>(type: "decimal(18, 9)", nullable: false),
                    MaxCars = table.Column<int>(nullable: false),
                    ServiceInfoId = table.Column<int>(nullable: false),
                    CityId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceLocations", x => x.ServiceLocationId);
                    table.ForeignKey(
                        name: "FK_ServiceLocations_Cities_CityId",
                        column: x => x.CityId,
                        principalTable: "Cities",
                        principalColumn: "CityId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ServiceLocations_ServiceInfos_ServiceInfoId",
                        column: x => x.ServiceInfoId,
                        principalTable: "ServiceInfos",
                        principalColumn: "ServiceInfoId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ServiceOperations",
                columns: table => new
                {
                    ServiceOperationId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: false),
                    Icon = table.Column<string>(nullable: true),
                    ServiceOperationTypeId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceOperations", x => x.ServiceOperationId);
                    table.ForeignKey(
                        name: "FK_ServiceOperations_ServiceOperationTypes_ServiceOperationTypeId",
                        column: x => x.ServiceOperationTypeId,
                        principalTable: "ServiceOperationTypes",
                        principalColumn: "ServiceOperationTypeId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ServiceLocationContacts",
                columns: table => new
                {
                    ServiceLocationContactId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ContactTypeId = table.Column<int>(nullable: false),
                    ServiceLocationId = table.Column<int>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceLocationContacts", x => new { x.ServiceLocationContactId, x.ServiceLocationId, x.ContactTypeId });
                    table.UniqueConstraint("AK_ServiceLocationContacts_ServiceLocationContactId", x => x.ServiceLocationContactId);
                    table.ForeignKey(
                        name: "FK_ServiceLocationContacts_ContactTypes_ContactTypeId",
                        column: x => x.ContactTypeId,
                        principalTable: "ContactTypes",
                        principalColumn: "ContactTypeId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ServiceLocationContacts_ServiceLocations_ServiceLocationId",
                        column: x => x.ServiceLocationId,
                        principalTable: "ServiceLocations",
                        principalColumn: "ServiceLocationId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ServiceLocationFacilities",
                columns: table => new
                {
                    ServiceLocationFacilityId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ServiceFacilityId = table.Column<int>(nullable: false),
                    ServiceLocationId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceLocationFacilities", x => new { x.ServiceLocationFacilityId, x.ServiceLocationId, x.ServiceFacilityId });
                    table.UniqueConstraint("AK_ServiceLocationFacilities_ServiceLocationFacilityId", x => x.ServiceLocationFacilityId);
                    table.ForeignKey(
                        name: "FK_ServiceLocationFacilities_ServiceFacilities_ServiceFacilityId",
                        column: x => x.ServiceFacilityId,
                        principalTable: "ServiceFacilities",
                        principalColumn: "ServiceFacilityId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ServiceLocationFacilities_ServiceLocations_ServiceLocationId",
                        column: x => x.ServiceLocationId,
                        principalTable: "ServiceLocations",
                        principalColumn: "ServiceLocationId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ServiceLocationPhotos",
                columns: table => new
                {
                    ServiceLocationPhotoId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Link = table.Column<string>(nullable: true),
                    ServiceLocationId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceLocationPhotos", x => x.ServiceLocationPhotoId);
                    table.ForeignKey(
                        name: "FK_ServiceLocationPhotos_ServiceLocations_ServiceLocationId",
                        column: x => x.ServiceLocationId,
                        principalTable: "ServiceLocations",
                        principalColumn: "ServiceLocationId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ServiceLocationReviews",
                columns: table => new
                {
                    ServiceLocationReviewId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Rate = table.Column<float>(nullable: false),
                    Review = table.Column<string>(nullable: true),
                    DateTime = table.Column<DateTime>(nullable: false),
                    ServiceLocationId = table.Column<int>(nullable: false),
                    UserEServiceId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceLocationReviews", x => x.ServiceLocationReviewId);
                    table.ForeignKey(
                        name: "FK_ServiceLocationReviews_ServiceLocations_ServiceLocationId",
                        column: x => x.ServiceLocationId,
                        principalTable: "ServiceLocations",
                        principalColumn: "ServiceLocationId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ServiceManufacturers",
                columns: table => new
                {
                    ServiceManufacturerId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CarManufacturerId = table.Column<int>(nullable: false),
                    ServiceLocationId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceManufacturers", x => new { x.ServiceManufacturerId, x.ServiceLocationId, x.CarManufacturerId });
                    table.UniqueConstraint("AK_ServiceManufacturers_ServiceManufacturerId", x => x.ServiceManufacturerId);
                    table.ForeignKey(
                        name: "FK_ServiceManufacturers_CarManufacturers_CarManufacturerId",
                        column: x => x.CarManufacturerId,
                        principalTable: "CarManufacturers",
                        principalColumn: "CarManufacturerId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ServiceManufacturers_ServiceLocations_ServiceLocationId",
                        column: x => x.ServiceLocationId,
                        principalTable: "ServiceLocations",
                        principalColumn: "ServiceLocationId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ServicePrograms",
                columns: table => new
                {
                    ServiceProgramId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    WeekDay = table.Column<int>(nullable: false),
                    OpenHour = table.Column<int>(nullable: false),
                    OpenMinute = table.Column<int>(nullable: false),
                    CloseHour = table.Column<int>(nullable: false),
                    CloseMinute = table.Column<int>(nullable: false),
                    ServiceLocationId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServicePrograms", x => x.ServiceProgramId);
                    table.ForeignKey(
                        name: "FK_ServicePrograms_ServiceLocations_ServiceLocationId",
                        column: x => x.ServiceLocationId,
                        principalTable: "ServiceLocations",
                        principalColumn: "ServiceLocationId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ServicePromotions",
                columns: table => new
                {
                    ServicePromotionId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(nullable: true),
                    Image = table.Column<string>(nullable: true),
                    ServiceLocationId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServicePromotions", x => x.ServicePromotionId);
                    table.ForeignKey(
                        name: "FK_ServicePromotions_ServiceLocations_ServiceLocationId",
                        column: x => x.ServiceLocationId,
                        principalTable: "ServiceLocations",
                        principalColumn: "ServiceLocationId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ServiceLocationOperations",
                columns: table => new
                {
                    ServiceLocationOperationId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ServiceLocationId = table.Column<int>(nullable: false),
                    ServiceOperationId = table.Column<int>(nullable: false),
                    Price = table.Column<decimal>(type: "decimal(18, 9)", nullable: false),
                    Time = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceLocationOperations", x => new { x.ServiceLocationOperationId, x.ServiceLocationId, x.ServiceOperationId });
                    table.UniqueConstraint("AK_ServiceLocationOperations_ServiceLocationOperationId", x => x.ServiceLocationOperationId);
                    table.ForeignKey(
                        name: "FK_ServiceLocationOperations_ServiceLocations_ServiceLocationId",
                        column: x => x.ServiceLocationId,
                        principalTable: "ServiceLocations",
                        principalColumn: "ServiceLocationId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ServiceLocationOperations_ServiceOperations_ServiceOperationId",
                        column: x => x.ServiceOperationId,
                        principalTable: "ServiceOperations",
                        principalColumn: "ServiceOperationId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceLocationContacts_ContactTypeId",
                table: "ServiceLocationContacts",
                column: "ContactTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceLocationContacts_ServiceLocationId",
                table: "ServiceLocationContacts",
                column: "ServiceLocationId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceLocationFacilities_ServiceFacilityId",
                table: "ServiceLocationFacilities",
                column: "ServiceFacilityId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceLocationFacilities_ServiceLocationId",
                table: "ServiceLocationFacilities",
                column: "ServiceLocationId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceLocationOperations_ServiceLocationId",
                table: "ServiceLocationOperations",
                column: "ServiceLocationId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceLocationOperations_ServiceOperationId",
                table: "ServiceLocationOperations",
                column: "ServiceOperationId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceLocationPhotos_ServiceLocationId",
                table: "ServiceLocationPhotos",
                column: "ServiceLocationId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceLocationReviews_ServiceLocationId",
                table: "ServiceLocationReviews",
                column: "ServiceLocationId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceLocations_CityId",
                table: "ServiceLocations",
                column: "CityId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceLocations_ServiceInfoId",
                table: "ServiceLocations",
                column: "ServiceInfoId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceManufacturers_CarManufacturerId",
                table: "ServiceManufacturers",
                column: "CarManufacturerId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceManufacturers_ServiceLocationId",
                table: "ServiceManufacturers",
                column: "ServiceLocationId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceOperations_ServiceOperationTypeId",
                table: "ServiceOperations",
                column: "ServiceOperationTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_ServicePrograms_ServiceLocationId",
                table: "ServicePrograms",
                column: "ServiceLocationId");

            migrationBuilder.CreateIndex(
                name: "IX_ServicePromotions_ServiceLocationId",
                table: "ServicePromotions",
                column: "ServiceLocationId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "ServiceLocationContacts");

            migrationBuilder.DropTable(
                name: "ServiceLocationFacilities");

            migrationBuilder.DropTable(
                name: "ServiceLocationOperations");

            migrationBuilder.DropTable(
                name: "ServiceLocationPhotos");

            migrationBuilder.DropTable(
                name: "ServiceLocationReviews");

            migrationBuilder.DropTable(
                name: "ServiceManufacturers");

            migrationBuilder.DropTable(
                name: "ServicePrograms");

            migrationBuilder.DropTable(
                name: "ServicePromotions");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "ContactTypes");

            migrationBuilder.DropTable(
                name: "ServiceFacilities");

            migrationBuilder.DropTable(
                name: "ServiceOperations");

            migrationBuilder.DropTable(
                name: "CarManufacturers");

            migrationBuilder.DropTable(
                name: "ServiceLocations");

            migrationBuilder.DropTable(
                name: "ServiceOperationTypes");

            migrationBuilder.DropTable(
                name: "Cities");

            migrationBuilder.DropTable(
                name: "ServiceInfos");
        }
    }
}
