using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SuperHero.Api.Data;
using SuperHero.Api.Models;

namespace SuperHero.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuperHerosController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public SuperHerosController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<ActionResult<List<SuperHeroModel>>> GetSuperHeros()
        {

            var heros = Ok(await _db.SuperHeros.ToListAsync());

            return heros;
        }

        [HttpPost]
        public async Task<ActionResult<List<SuperHeroModel>>> CreateSuperHero( SuperHeroModel model) 
        {
            await _db.SuperHeros.AddAsync(model);
            await _db.SaveChangesAsync();
            return Ok(await _db.SuperHeros.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<SuperHeroModel>>> UpdateSuperHero(SuperHeroModel model)
        {
            var hero = await _db.SuperHeros.FindAsync(model.Id);
            if (hero == null)
                return BadRequest("Hero not found.");
            hero.Name = model.Name;
            hero.FirstName = model.FirstName;
            hero.LastName = model.LastName;
            hero.Place = model.Place;
            await _db.SaveChangesAsync();
            return Ok(await _db.SuperHeros.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<SuperHeroModel>>> DeleteSuperHero(int id)
        {
            var hero = await _db.SuperHeros.FindAsync(id);
            if (hero == null)
                return BadRequest("Hero not found.");

            _db.SuperHeros.Remove(hero);
            await _db.SaveChangesAsync();
            return Ok(await _db.SuperHeros.ToListAsync());
        }
    }
}
