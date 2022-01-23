using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using AntiqueApi.Interfaces;

namespace AntiqueApi.Services
{
    public class BlobService : IBlobService
    {
        private readonly BlobServiceClient _blobServiceClient;

        public BlobService(BlobServiceClient blobServiceClient)
        {
            _blobServiceClient = blobServiceClient;
        }
        public async Task<Uri> UploadBlobFileAsync(string blobContainerName, Stream content, string contentType, string fileName)
        {
            var containerClient = GetBlobContainerClient(blobContainerName);
            var blobClient = containerClient.GetBlobClient(fileName);

            await blobClient.UploadAsync(content, new BlobHttpHeaders { ContentType = contentType });

            return containerClient.Uri;
        }

        private BlobContainerClient GetBlobContainerClient(string blobContainerName)
        {
            var containerClient = _blobServiceClient.GetBlobContainerClient(blobContainerName);
            containerClient.CreateIfNotExists(PublicAccessType.Blob);

            return containerClient;
        }
    }
}
