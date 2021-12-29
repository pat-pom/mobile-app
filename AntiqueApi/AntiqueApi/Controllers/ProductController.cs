using AntiqueApi.Context;
using AntiqueApi.DTO;
using AntiqueApi.Interfaces;
using AntiqueApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AntiqueApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ProductController : ControllerBase
  {
    private readonly IBlobService _blobService;
    private readonly AntiqueDbContext _antiqueDbContext;

    private const string PRODUCT_IMAGES_STORAGE_CONTAINER = "productimages";

    public ProductController(IBlobService blobService, AntiqueDbContext antiqueDbContext)
    {
      _blobService = blobService;
      _antiqueDbContext = antiqueDbContext;
    }

    [HttpGet]
    public IActionResult GetAllProducts()
    {
      var products = _antiqueDbContext.Products.Include(x => x.Images).ToList();

      return Ok(products);
    }

    [HttpPost]
    [DisableRequestSizeLimit]
    public async Task<ActionResult<ProductModel>> CreateProduct([FromForm] IList<IFormFile> files, [FromForm] ProductDTO product)
    {
      if (!files.Any()) return BadRequest();

      ProductModel productModel = new ProductModel();
      ICollection<ImagesModel> images = new List<ImagesModel>();

      foreach (var file in files)
      {
        var result = await _blobService.UploadBlobFileAsync(PRODUCT_IMAGES_STORAGE_CONTAINER, file.OpenReadStream(), file.ContentType, file.FileName);
        Uri imageUrl = new Uri(result.AbsoluteUri + "/" + file.FileName);

        ImagesModel imagesModel = new ImagesModel()
        {
          //Id = new Guid(),
          ImageName = file.FileName,
          ImageSize = file.Length,
          ImageType = file.ContentType,
          ImageUrl = imageUrl,
        };

        images.Add(imagesModel);
      }

      productModel.Images = images;
      productModel.Title = product.Title;
      productModel.Description = product.Description;
      productModel.Category = product.Category;
      productModel.Price = product.Price;
      productModel.State = product.State;
      productModel.Localization = product.Localization;
      productModel.CreatedDate = DateTime.Now;
      productModel.UpdatedDate = DateTime.Now;

      var savedProduct = await _antiqueDbContext.Products.AddAsync(productModel);
      await _antiqueDbContext.SaveChangesAsync();

      return Ok(productModel);
    }
  }
}