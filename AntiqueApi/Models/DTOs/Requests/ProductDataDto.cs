using System.ComponentModel.DataAnnotations.Schema;

namespace AntiqueApi.Models.DTOs.Requests
{
    public class ProductDataDto
    {
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? UserId { get; set; }
        public string? Category { get; set; }
        public decimal? Price { get; set; }
        public string? State { get; set; }
        public string? Localization { get; set; }
    }
}
