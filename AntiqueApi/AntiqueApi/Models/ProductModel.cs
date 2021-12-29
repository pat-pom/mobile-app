using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AntiqueApi.Models
{
  public class ProductModel
  {
    public Guid Id { get; set; }
    [Required]
    public ICollection<ImagesModel>? Images { get; set; }
    [Required]
    [StringLength(50)]
    public string? Title { get; set; }
    [Required]
    [StringLength(500)]
    public string? Description { get; set; }
    [Required]
    public string? Category { get; set; }
    [Required]
    [Column(TypeName = "decimal(18,2)")]
    public decimal Price { get; set; }
    [Required]
    public string? State { get; set; }
    [Required]
    public GeolocationModel? Localization { get; set; }
    [DataType(DataType.Date)]
    public DateTime CreatedDate { get; set; }
    [DataType(DataType.Date)]
    public DateTime UpdatedDate { get; set; }
  }
}