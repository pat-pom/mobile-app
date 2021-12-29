using AntiqueApi.Models;
using Microsoft.EntityFrameworkCore;

namespace AntiqueApi.Context
{
  public class AntiqueDbContext : DbContext
  {
    public DbSet<GeolocationModel>? Geolocations { get; set; }
    public DbSet<ImagesModel>? Images { get; set; }
    public DbSet<ProductModel>? Products { get; set; }

    public AntiqueDbContext(DbContextOptions<AntiqueDbContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<ProductModel>()
          .HasOne(a => a.Localization)
          .WithOne(b => b.Product)
          .HasForeignKey<GeolocationModel>(b => b.Id);
    }
  }
}