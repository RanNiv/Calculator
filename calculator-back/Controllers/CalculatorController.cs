using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Model;

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



   
     [HttpGet]
        public CalculationResult CalculateAction(int num1,int num2,int sign)
        {
            return new CalculationResult(num1,num2,sign);

        }






    }
}
