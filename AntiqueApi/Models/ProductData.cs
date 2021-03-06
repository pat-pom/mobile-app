using System.ComponentModel.DataAnnotations.Schema;

namespace AntiqueApi.Models
{
    public class ProductData
    {
        public Guid Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? UserId { get; set; }
        public string? Category { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal? Price { get; set; }
        public string? State { get; set; }
        public string? Localization { get; set; }
        public ICollection<ImagesModel>? Images { get; set; }

        [ForeignKey(nameof(UserId))]
        public virtual ApplicationUser? User { get; set; }
    }
}
