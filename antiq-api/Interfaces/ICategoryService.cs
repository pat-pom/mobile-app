using System;
using System.Collections.Generic;
using antiq_api.Entities;

namespace antiq_api.Interfaces {
  public interface ICategoryService {
    IEnumerable<Category> GetAll();
    Category GetById(Guid id);
    Category Create(Category category);
    Category Update(Guid id, Category category);
    void Delete(Guid id);
  }
}