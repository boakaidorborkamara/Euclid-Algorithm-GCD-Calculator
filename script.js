//submit btn
let calculate_btn = document.getElementById("calculate-btn");
//show result area
let result_area = document.getElementById("result-area");

//calculate and find the  greatest common divisor
function gcdCalculator(){
   let reminder;
   
   //user values
   let first_number = parseInt( document.getElementById("num1").value);
   let second_number = parseInt( document.getElementById("num2").value);

   
   if(first_number > second_number){
        //first computation
        reminder = first_number % second_number;

        if(reminder === 0){
            //execute if reminder is 0 after first computation
            result_area.innerHTML = second_number + " is the GCD";
        }
        else
        {
        //execute if reminder is not equal to 0 after first computation
            while( reminder !== 0){
                first_number = reminder;
                reminder = second_number % first_number;
            }
            //after swap, if reminder is equal to zero exacute this
            if(reminder == 0){
                console.log(first_number + " is the GCD");
                result_area.innerHTML = first_number + " is the Greatest Common Divisor";
            }
            
        }
        
   }
   else if(second_number > first_number){
        //first computation
        reminder = second_number % first_number;

        if(reminder === 0){
            //execute if reminder is 0 after first computation
            result_area.innerHTML = first_number + " is the Greatest Common Divisor";
        }
        else
        {
        //execute if reminder is not equal to 0 after first computation
            while( reminder !== 0){
                second_number = reminder;
                reminder = first_number % second_number;
            }
            //after swap, if reminder is equal to zero exacute this
            if(reminder === 0){
                console.log(first_number + " is the GCD");
                result_area.innerHTML = second_number + " is the Greatest Common Divisor";
            }
            
        }
        
   }
  
}

calculate_btn.addEventListener("click",gcdCalculator );
