using Escuela_API.Data;
using Escuela_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Escuela_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExperienciasController : Controller
    {
        private readonly BDContext _bDContext;

        public ExperienciasController(BDContext bDContext)
        {
            _bDContext = bDContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllExperiencias()
        {
            var experiencias = await _bDContext.Experienciaes.ToListAsync();
            return Ok(experiencias);
        }

        [HttpPost]
        public async Task<IActionResult> agregarExperiencia([FromBody]Experiencia experienciaRequest)
        { 
            experienciaRequest.Id = Guid.NewGuid();
            await _bDContext.Experienciaes.AddAsync(experienciaRequest);
            await _bDContext.SaveChangesAsync();
            return Ok(experienciaRequest);

        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetExperiencia([FromRoute] Guid id)
        {
            var experiencia = await _bDContext.Experienciaes.FirstOrDefaultAsync(x => x.Id == id);
            if (experiencia == null)
            {
                return NotFound();
            }

            return Ok(experiencia);

        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> actualizarExperiencia([FromRoute]Guid id,Experiencia actualizarExperienciaRequest)
        {
            var experiencia = await _bDContext.Experienciaes.FindAsync(id);
            if (experiencia == null)
            {
                return NotFound();
            }
            experiencia.nombreExp = actualizarExperienciaRequest.nombreExp;
            experiencia.academico = actualizarExperienciaRequest.academico;
            await _bDContext.SaveChangesAsync();

            return Ok(experiencia);
        }

        [HttpDelete]
        [Route("{id:Guid}")]

        public async Task<IActionResult> borrarExperiencia([FromRoute] Guid id)
        {
            var experiencia = await _bDContext.Experienciaes.FindAsync();
            if (experiencia == null)
            {
                return NotFound();
            }

            _bDContext.Experienciaes.Remove(experiencia);
            await _bDContext.SaveChangesAsync();
            return Ok(experiencia);
        }
    }
}
