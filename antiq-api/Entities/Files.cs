using System;
using System.ComponentModel.DataAnnotations;

namespace antiq_api.Entities {
  public class Files {
    public Guid Id { get; set; }

    [Required]
    [MaxLength(100)]
    public string Name { get; set; }

    [Required]
    [MaxLength(100)]
    public string FileType { get; set; }

    [Required]
    public byte[] DataFiles { get; set; }

    public virtual Product Product { get; set; }

    public virtual User User { get; set; }

    [DataType(DataType.Date)]
    public DateTime CreatedAt { get; set; }

    [DataType(DataType.Date)]
    public DateTime UpdatedAt { get; set; }
  }
}