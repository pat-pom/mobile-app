using AntiqueApi.Data;
using AntiqueApi.Models;
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

        public ProductController(ApiDbContext apiDbContext)
        {
            _context = apiDbContext;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetProducts()
        {
            var products = await _context.Products.ToListAsync();

            return Ok(products);
        }

        [HttpPost]
        public async Task<IActionResult> AddProduct(ProductData productData)
        {
            if(ModelState.IsValid)
            {
                await _context.Products.AddAsync(productData);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetProduct", new { productData.Id }, productData);
            }

            return new JsonResult("Something went wrong :(") { StatusCode = 500 };
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetProduct(Guid id)
        {
            var product = await _context.Products.FirstOrDefaultAsync(x => x.Id == id);

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
