using Microsoft.EntityFrameworkCore.Migrations;

namespace Domain.EF.Migrations
{
    public partial class AdaugareAppointment_Part3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ServiceLocationId",
                table: "ServiceLocationAppointments",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_ServiceLocationAppointments_ServiceLocationId",
                table: "ServiceLocationAppointments",
                column: "ServiceLocationId");

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceLocationAppointments_ServiceLocations_ServiceLocationId",
                table: "ServiceLocationAppointments",
                column: "ServiceLocationId",
                principalTable: "ServiceLocations",
                principalColumn: "ServiceLocationId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ServiceLocationAppointments_ServiceLocations_ServiceLocationId",
                table: "ServiceLocationAppointments");

            migrationBuilder.DropIndex(
                name: "IX_ServiceLocationAppointments_ServiceLocationId",
                table: "ServiceLocationAppointments");

            migrationBuilder.DropColumn(
                name: "ServiceLocationId",
                table: "ServiceLocationAppointments");
        }
    }
}
