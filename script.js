//submit btn
let calculate_btn = document.getElementById("calculate-btn");

//show result area
let result_area = document.getElementById("result-area");
// console.log(result_area);


//calculate and find the  greatest common divisor
function gcdCalculator(){
   
   //user values
   let first_number = parseInt( document.getElementById("num1").value);
   let second_number = parseInt( document.getElementById("num2").value);

   let reminder;

   if(first_number > second_number){
        //first divison
        reminder = first_number % second_number;

        if(reminder === 0){
            console.log(second_number + " is the GCD");
        }
        else{
            while( reminder !== 0){
                console.log(reminder);
                first_number = reminder;
                reminder = second_number % first_number;
                
                console.log(first_number + " first number");
                console.log(reminder);
                // console.log(second_number + " second num");
            }
            
            if(reminder == 0){
                console.log(first_number + " is the GCD");
            }
            
        }
        
   }
  
   
   

}

calculate_btn.addEventListener("click",gcdCalculator );
