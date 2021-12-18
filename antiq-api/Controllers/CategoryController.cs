using System;
using antiq_api.Entities;
using antiq_api.Helpers;
using antiq_api.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace antiq_api.Controllers {
  [ApiController]
  [Route("[controller]")]
  public class CategoryController : ControllerBase {
    private readonly ICategoryService _categoryService;

    public CategoryController(ICategoryService categoryService) {
      _categoryService = categoryService;
    }

    [HttpGet]
    public IActionResult GetAll() {
      var categories = _categoryService.GetAll();

      return Ok(categories);
    }

    [HttpGet("{id}")]
    public IActionResult GetById(Guid id) {
      var categories = _categoryService.GetById(id);

      return Ok(categories);
    }
    
    [HttpPost]
    public IActionResult Create(Category category) {
      var newCategory = _categoryService.Create(category);
      return Ok(newCategory);
    }

    [HttpPut("{id}")]
    public IActionResult Update(Guid id, Category category) {
      var updatedCategory = _categoryService.Update(id, category);
      return Ok(updatedCategory);
    }
        
    [HttpDelete("{id}")]
    public IActionResult Delete(Guid id) {
      _categoryService.Delete(id);
      return Ok(new { message = "User deleted" });
    }
  }
}