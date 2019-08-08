using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Domain.EF.Migrations
{
    public partial class AdaugareAppointment_Part2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ServiceLocationAppointments",
                columns: table => new
                {
                    ServiceLocationAppointmentId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CarYear = table.Column<int>(nullable: false),
                    CarManufacturerId = table.Column<int>(nullable: false),
                    CarModel = table.Column<string>(nullable: true),
                    AppointmentTime = table.Column<DateTime>(nullable: false),
                    ServiceLocationOperationId = table.Column<int>(nullable: false),
                    ServiceLocationOperationId1 = table.Column<int>(nullable: true),
                    ServiceLocationOperationServiceLocationId = table.Column<int>(nullable: true),
                    ServiceLocationOperationServiceOperationId = table.Column<int>(nullable: true),
                    EServiceUserId = table.Column<int>(nullable: false),
                    Phone = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceLocationAppointments", x => x.ServiceLocationAppointmentId);
                    table.ForeignKey(
                        name: "FK_ServiceLocationAppointments_CarManufacturers_CarManufacturerId",
                        column: x => x.CarManufacturerId,
                        principalTable: "CarManufacturers",
                        principalColumn: "CarManufacturerId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ServiceLocationAppointments_ServiceLocationOperations_ServiceLocationOperationId1_ServiceLocationOperationServiceLocationId_~",
                        columns: x => new { x.ServiceLocationOperationId1, x.ServiceLocationOperationServiceLocationId, x.ServiceLocationOperationServiceOperationId },
                        principalTable: "ServiceLocationOperations",
                        principalColumns: new[] { "ServiceLocationOperationId", "ServiceLocationId", "ServiceOperationId" },
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ServiceLocationAppointments_CarManufacturerId",
                table: "ServiceLocationAppointments",
                column: "CarManufacturerId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceLocationAppointments_ServiceLocationOperationId1_ServiceLocationOperationServiceLocationId_ServiceLocationOperationSe~",
                table: "ServiceLocationAppointments",
                columns: new[] { "ServiceLocationOperationId1", "ServiceLocationOperationServiceLocationId", "ServiceLocationOperationServiceOperationId" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ServiceLocationAppointments");
        }
    }
}
