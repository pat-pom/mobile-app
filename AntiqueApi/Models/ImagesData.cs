namespace AntiqueApi.Models
{
    public class ImagesModel
    {
        public Guid Id { get; set; }
        public string? ImageName { get; set; }
        public string? ImageType { get; set; }
        public Uri? ImageUrl { get; set; }
        public long ImageSize { get; set; }
    }
}
