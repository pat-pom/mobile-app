using System.ComponentModel.DataAnnotations.Schema;

namespace AntiqueApi.Models
{
    public class ProductData
    {
        public Guid Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? UserId { get; set; }

        [ForeignKey(nameof(UserId))]
        public virtual ApplicationUser? User { get; set; }
    }
}
