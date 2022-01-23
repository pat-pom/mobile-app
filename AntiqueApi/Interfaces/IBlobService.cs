namespace AntiqueApi.Interfaces
{
    public interface IBlobService
    {
        Task<Uri> UploadBlobFileAsync(string blobContainerName, Stream content, string contentType, string fileName);
    }
}
