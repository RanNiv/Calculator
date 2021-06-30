using System;
 
namespace Model
{
 
    public class CalculationResult
    {
 
        public string ResultMessage { get; set; } = "Ok";
        public float Result {get; set;}
        public CalculationResult(int num1, int num2, int sign)
        {
               switch(sign)
               {
                 case 1:
                 this.Result=num1+num2;
                 break;
                 case 2:
                 this.Result=num1-num2;
                 break;
                 case 3:
                 this.Result=num1*num2;
                 break;
                 case 4:
                 try{
                 this.Result=num1/num2;
                 }
                 catch (DivideByZeroException e)
                 {
                       ResultMessage=e.Message;
 
                 }
                 break;
 
 
               }
 
 
        }
   
       
   }
 
}
 
 
 
 
 

