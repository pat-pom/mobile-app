using System;
using System.Collections.Generic;
using System.Linq;
using antiq_api.Entities;
using antiq_api.Helpers;
using antiq_api.Interfaces;

namespace antiq_api.Services {
  public class CategoryService : ICategoryService {
    private readonly DataContext _context;

    public CategoryService(DataContext context) {
      _context = context;
    }

    public Category Create(Category category)
    {
      if (_context.Categories.Any(x => x.Name == category.Name)) {
        throw new Exception("Category with the name" + category.Name + "already exist");
      }

       category.CreatedAt = new DateTime(); 
      _context.Categories.Add(category);
      _context.SaveChanges();

      return category;
    }

    public void Delete(Guid id)
    {
      var category = getCategory(id);
      _context.Categories.Remove(category);
      _context.SaveChanges();
    }

    public IEnumerable<Category> GetAll()
    {
      return _context.Categories;
    }

    public Category GetById(Guid id)
    {
      return getCategory(id);
    }

    public Category Update(Guid id, Category category)
    {
      var categoryToUpdate = getCategory(id);

      if (_context.Categories.Any(x => x.Name == category.Name)) {
        throw new Exception("Category with the name" + category.Name + "already exist");
      }

      category.UpdatedAt = new DateTime();
      _context.Categories.Update(category);
      _context.SaveChanges();

      return category;
    }

    private Category getCategory(Guid id) {
      var category = _context.Categories.Find(id);

      if (category == null) throw new KeyNotFoundException("Category not found");

      return category;
    }
  }
}