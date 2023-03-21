using Escuela_API.Data;
using Escuela_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Escuela_API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class EstudiantesController : Controller
    {
        private readonly BDContext _dbContext;
        public EstudiantesController(BDContext bDContext)
        {
            _dbContext = bDContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllEstudiantes()
        {
            var estudiantes = await _dbContext.Estudiantes.ToListAsync();

            return Ok(estudiantes);
        }

        [HttpPost]
        public async Task<IActionResult> agregarEstudiante([FromBody] Estudiante estudianteRequest)
        {
            estudianteRequest.Id = Guid.NewGuid();
            await _dbContext.Estudiantes.AddAsync(estudianteRequest);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetEstudiante([FromRoute] Guid id)
        {
            var estudiante = await _dbContext.Estudiantes.FirstOrDefaultAsync(x => x.Id == id);
            if (estudiante == null) {
                return NotFound();
            }

            return Ok(estudiante);

        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> actualizarEstudiante([FromRoute] Guid id, Estudiante actualizarEstudianteRequest)
        {
            var estudiante  = await _dbContext.Estudiantes.FindAsync(id);
            if (estudiante == null)
            {
                return NotFound();
            }

            estudiante.nombre = actualizarEstudianteRequest.nombre;
            estudiante.apellido = actualizarEstudianteRequest.apellido;
            estudiante.edad = actualizarEstudianteRequest.edad;
            estudiante.genero = actualizarEstudianteRequest.genero;

            await _dbContext.SaveChangesAsync();

            return Ok(estudiante);

        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> borrarEstudiante([FromRoute] Guid id)
        {
            var estudiante = await _dbContext.Estudiantes.FindAsync(id);
            if (estudiante == null)
            {
                return NotFound();

            }

            _dbContext.Estudiantes.Remove(estudiante);
            await _dbContext.SaveChangesAsync();
            return Ok(estudiante);

        }

    }

}