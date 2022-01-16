using AntiqueApi.Models;
using Microsoft.EntityFrameworkCore;

namespace AntiqueApi.Data
{
    public class ApiDbContext : DbContext
    {
        public virtual DbSet<ProductData>? Products { get; set; }

        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options) { }
    }
}
