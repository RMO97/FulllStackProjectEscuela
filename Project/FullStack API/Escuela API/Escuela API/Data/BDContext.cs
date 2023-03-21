using Escuela_API.Models;
using Microsoft.EntityFrameworkCore;

namespace Escuela_API.Data
{
    public class BDContext : DbContext
    {
        public BDContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Estudiante> Estudiantes { get; set; }
        public DbSet<Maestro> Maestros { get; set;}
        public DbSet<Experiencia> Experienciaes { get; set; }    
    }
}
