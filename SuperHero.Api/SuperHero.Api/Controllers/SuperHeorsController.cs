using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SuperHero.Api.Models;

namespace SuperHero.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuperHeorsController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<SuperHeroModel>>> GetSuperHeros()
        {
            var heros =  new List<SuperHeroModel> { 
                new SuperHeroModel 
                {
                    Name = "Spider Man",
                    FirstName = "Peter",
                    LastName = "Pareker",
                    Place ="New York City"
                },
            };

            return heros;
        }
    }
}
