using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace antiq_api.Entities {
  public class Category {
    public Guid Id { get; set; }

    [Required]
    [StringLength(60, MinimumLength = 3)]
    public string Name { get; set; }

    public ICollection<Product> Products { get; set; }

    [DataType(DataType.Date)]
    public DateTime CreatedAt { get; set; }

    [DataType(DataType.Date)]
    public DateTime UpdatedAt { get; set; }
  }
}