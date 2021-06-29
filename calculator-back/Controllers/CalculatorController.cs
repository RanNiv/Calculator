using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace calculator_back.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class CalculatorController : ControllerBase
    {





        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "Test1", "Test2" };

        }



     //[Route("api/Calculator/CalculateAction/{num1:int}")]
     [HttpGet]
        public float CalculateAction(int num1,int num2/*, int num2, int operatorType*/)
        {
            return num1+num2;

        }






    }
}
