using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace antiq_api.Entities {
  public class Product {
    public Guid Id { get; set; }

    [Required]
    [StringLength(60, MinimumLength = 3)]
    public string Name { get; set; }

    [Required]
    [StringLength(200, MinimumLength = 3)]
    public string Description { get; set; }

    [Required]
    public string Condition { get; set; }

    [Required]
    public double Price { get; set; }

    [Required]
    public ICollection<Category> Categories { get; set; }

    [Required]
    public virtual ICollection<Files> Photos { get; set; }

    public virtual User User { get; set; }

    [DataType(DataType.Date)]
    public DateTime CreatedAt { get; set; }

    [DataType(DataType.Date)]
    public DateTime UpdatedAt { get; set; }
  }
}