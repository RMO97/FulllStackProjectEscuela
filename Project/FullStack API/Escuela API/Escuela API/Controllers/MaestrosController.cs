using Escuela_API.Data;
using Escuela_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;

namespace Escuela_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MaestrosController : Controller
    {
        private readonly BDContext _bDContext;

        public MaestrosController(BDContext bDContext)
        {
           _bDContext = bDContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllMaestros()
        {
            var maestros = await _bDContext.Maestros.ToListAsync();
            return Ok(maestros);
        }

        [HttpPost]
        public async Task<IActionResult> agregarMaestro([FromBody] Maestro maestroRequest) 
        {
            maestroRequest.Id = Guid.NewGuid();
            await _bDContext.Maestros.AddAsync(maestroRequest);
            await _bDContext.SaveChangesAsync();
            return Ok(maestroRequest);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetMaestro([FromRoute] Guid id)
        {
            var maestro = await _bDContext.Maestros.FirstOrDefaultAsync(x => x.Id == id);
            if (maestro == null)
            {
                return NotFound();
            }

            return Ok(maestro);

        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> actualizarMaestro([FromRoute] Guid id, Maestro actualizarMaestroRequest)
        {
            var maestro = await _bDContext.Maestros.FindAsync(id);
            if (maestro == null) 
            {
                return NotFound();
            }
            maestro.nombreMtro = actualizarMaestroRequest.nombreMtro;
            maestro.edadMtro = actualizarMaestroRequest.edadMtro;
            await _bDContext.SaveChangesAsync();

            return Ok(maestro);

        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> borrarMaestro([FromRoute] Guid id)
        {
            var maestro = await _bDContext.Maestros.FindAsync(id);
            if (maestro == null)
            {
                return NotFound();
            }

            _bDContext.Maestros.Remove(maestro);
            await _bDContext.SaveChangesAsync();
            return Ok(maestro);
        }
    }
}
