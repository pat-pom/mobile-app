namespace AntiqueApi.Models
{
  public class ImagesModel
  {
    public Guid Id { get; set; }
    public string? ImageName { get; set; }
    public string? ImageType { get; set; }
    public string? ImageUrl { get; set; }
    public int ImageSize { get; set; }
  }
}