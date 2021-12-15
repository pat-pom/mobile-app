using Microsoft.EntityFrameworkCore;

namespace antiq_api.Entities {
  public class AntiqDbContext : DbContext {
    public AntiqDbContext(DbContextOptions<AntiqDbContext> options) : base(options) {}

    public DbSet<Category> Categories { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Files> Files { get; set; }
    public DbSet<Address> Addresses { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder) {
      modelBuilder.Entity<User>()
          .HasOne(a => a.Address)
          .WithOne(b => b.User)
          .HasForeignKey<Address>(b => b.Id);

      modelBuilder.Entity<User>()
          .HasOne(a => a.Photo)
          .WithOne(b => b.User)
          .HasForeignKey<Files>(b => b.Id);
    }
  }
}