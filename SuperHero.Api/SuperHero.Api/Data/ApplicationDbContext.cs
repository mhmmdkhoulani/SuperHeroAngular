using Microsoft.EntityFrameworkCore;
using SuperHero.Api.Models;

namespace SuperHero.Api.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<SuperHeroModel> SuperHeros { get; set; }
    }
}
