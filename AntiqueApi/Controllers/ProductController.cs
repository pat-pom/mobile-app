using AntiqueApi.Data;
using AntiqueApi.Interfaces;
using AntiqueApi.Models;
using AntiqueApi.Models.DTOs.Requests;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AntiqueApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class ProductController : ControllerBase
    {
        private readonly ApiDbContext _context;
        private readonly IBlobService _blobService;

        private const string PRODUCT_IMAGES_STORAGE_CONTAINER = "images";

        public ProductController(ApiDbContext apiDbContext, IBlobService blobService)
        {
            _context = apiDbContext;
            _blobService = blobService;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetProducts()
        {
            var products = await _context.Products.Include(x => x.User).Include(x => x.Images).ToListAsync();

            return Ok(products);
        }

        [HttpPost]
        [AllowAnonymous]
        [DisableRequestSizeLimit]
        public async Task<IActionResult> AddProduct([FromForm] IList<IFormFile> files, [FromForm] ProductDataDto product)
        {
            if (!files.Any()) return BadRequest();

            if (ModelState.IsValid)
            {
                ProductData productData = new ProductData();
                ICollection<ImagesModel> images = new List<ImagesModel>();

                foreach (var file in files)
                {
                    var result = await _blobService.UploadBlobFileAsync(PRODUCT_IMAGES_STORAGE_CONTAINER, file.OpenReadStream(), file.ContentType, file.FileName);
                    Uri imageUrl = new Uri(result.AbsoluteUri + "/" + file.FileName);

                    ImagesModel imagesModel = new ImagesModel()
                    {
                        ImageName = file.FileName,
                        ImageSize = file.Length,
                        ImageType = file.ContentType,
                        ImageUrl = imageUrl,
                    };

                    images.Add(imagesModel);
                }

                productData.Images = images;
                productData.Title = product.Title;
                productData.Description = product.Description;
                productData.Category = product.Category;
                productData.Price = product.Price;
                productData.State = product.State;
                productData.Localization = product.Localization;
                productData.UserId = product.UserId;

                var savedProduct = await _context.Products.AddAsync(productData);
                await _context.SaveChangesAsync();

                return Ok(productData);
            }

            return new JsonResult("Something went wrong :(") { StatusCode = 500 };
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetProduct(Guid id)
        {
            var product = await _context.Products.Include(x => x.User).Include(x => x.Images).FirstOrDefaultAsync(x => x.Id == id);

            if (product == null) { return NotFound(); }

            return Ok(product);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(Guid id, ProductData productData)
        {
            if(id != productData.Id) { return BadRequest(); }

            var existProduct = await _context.Products.FirstOrDefaultAsync(x => x.Id == id);

            if (existProduct == null) { return NotFound(); }

            existProduct.Title = productData.Title;
            existProduct.Description = productData.Description;
            
            await _context.SaveChangesAsync();

            return Ok(existProduct);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(Guid id)
        {
            var existProduct = await _context.Products.FirstOrDefaultAsync(x => x.Id == id);

            if (existProduct == null) { return NotFound(); }

            _context.Products.Remove(existProduct);
            await _context.SaveChangesAsync();

            return Ok(existProduct);
        }
    }
}
