using Microsoft.EntityFrameworkCore.Migrations;

namespace Domain.EF.Migrations
{
    public partial class AddPhotoPosition : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Position",
                table: "ServiceLocationPhotos",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Position",
                table: "ServiceLocationPhotos");
        }
    }
}
