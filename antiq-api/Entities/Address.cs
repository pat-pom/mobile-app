using System;
using System.ComponentModel.DataAnnotations;

namespace antiq_api.Entities {
  public class Address {
    public Guid Id { get; set; }

    [Required]
    [MaxLength(100)]
    public string Address1 { get; set; }

    [Required]
    [MaxLength(100)]
    public string Address2 { get; set; }

    [Required]
    [MaxLength(100)]
    public string City { get; set; }

    [Required]
    [MaxLength(5)]
    public int ZipCode { get; set; }

    [Required]
    [MaxLength(100)]
    public string State { get; set; }

    [Required]
    [MaxLength(100)]
    public string Country { get; set; }

    public virtual User User { get; set; }

    [DataType(DataType.Date)]
    public DateTime CreatedAt { get; set; }

    [DataType(DataType.Date)]
    public DateTime UpdatedAt { get; set; }
  }
}