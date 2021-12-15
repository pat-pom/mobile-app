using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace antiq_api.Entities {
  public class User {
    public Guid Id { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    public virtual Files Photo { get; set; }

    public virtual Address Address { get; set; }

    public ICollection<Product> Products { get; set; }
  }
}