using AntiqueApi.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AntiqueApi.Data
{
    public class ApiDbContext : IdentityDbContext
    {
        public virtual DbSet<ProductData>? Products { get; set; }

        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options) { }
    }
}
