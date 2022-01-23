using AntiqueApi.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AntiqueApi.Data
{
    public class ApiDbContext : IdentityDbContext<ApplicationUser>
    {
        public virtual DbSet<ProductData>? Products { get; set; }
        public virtual DbSet<RefreshToken>? RefreshTokens { get; set; }
        public DbSet<ImagesModel>? Images { get; set; }

        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options) { }
    }
}
