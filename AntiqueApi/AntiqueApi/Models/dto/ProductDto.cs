using AntiqueApi.Models;

namespace AntiqueApi.DTO
{
  public class ProductDTO
  {
    public string? Title { get; set; }
    public string? Description { get; set; }
    public string? Category { get; set; }
    public decimal Price { get; set; }
    public string? State { get; set; }
    public GeolocationModel? Localization { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime UpdatedDate { get; set; }
  }
}