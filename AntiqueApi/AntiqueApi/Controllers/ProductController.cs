using AntiqueApi.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace AntiqueApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ProductController : ControllerBase
  {
    private IBlobService _blobService;

    private const string PRODUCT_IMAGES_STORAGE_CONTAINER = "productimages";

    public ProductController(IBlobService blobService)
    {
      _blobService = blobService;
    }

    [HttpPost]
    [DisableRequestSizeLimit]
    public async Task<ActionResult> CreateProduct()
    {
      IFormFile file = Request.Form.Files[0];

      if (file == null) return BadRequest();

      var result = await _blobService.UploadBlobFileAsync(PRODUCT_IMAGES_STORAGE_CONTAINER, file.OpenReadStream(), file.ContentType, file.FileName);

      return Ok(new { path = result.AbsoluteUri });
    }
  }
}