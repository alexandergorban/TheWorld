using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TheWorld.Models;
using TheWorld.ViewModels;

namespace TheWorld.Controllers.Api
{
    [Route("api/trips")]
    public class TripsController : Controller
    {
        private IWorldRepository _repository;

        public TripsController(IWorldRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("")]
        public IActionResult Get()
        {
            try
            {
                var results = _repository.GetAllTrips();

                return Ok(Mapper.Map<IEnumerable<TripViewModel>>(results));
            }
            catch (Exception)
            {
                // TODO Logging

                return BadRequest("Error occured");
            }
           
        }

        [HttpPost("")]
        public IActionResult Post([FromBody]TripViewModel theTrip)
        {
            if (ModelState.IsValid)
            {
                // Save to the Databases
                var newTrip = Mapper.Map<Trip>(theTrip);

                return Created($"api/trips/{theTrip.Name}", Mapper.Map<TripViewModel>(newTrip));
            }

            return BadRequest("Bad data");
        }
    }
}
