
//btn
    let calculate_btn = document.getElementById("calculate-btn");
    
    let result_area = document.getElementById("result-area");
    console.log(result_area);

    //calculate gcd
    function gcdCalculator(){
       let reminder ;
       let greatest_common_factor;
       let num1 = parseInt( document.getElementById("num1").value);
       let num2 = parseInt( document.getElementById("num2").value);
        
       if(num1 > num2){
            reminder = num1 % num2;

            if(reminder === 0){
                greatest_common_factor = num2;
                result_area.innerHTML = `The greatest common divisor is ${greatest_common_factor}`;
            }
            else if(reminder != 0){
                reminder = num2 % reminder;
                result_area.innerHTML = `The greatest common divisor is ${num2}`;
            }
        
       }
       else if(num2 > num1){
           greatest_common_factor = num1;
           reminder = num2 % num1;
           result_area.innerHTML = `The greatest common divisor is ${greatest_common_factor}`;

           if(reminder === 0){
                greatest_common_factor = num1;
                result_area.innerHTML = `The greatest common divisor is ${greatest_common_factor}`;
            }
            else if(reminder != 0){
                reminder = num2 % reminder;
                result_area.innerHTML = `The greatest common divisor is ${num1}`;
            }
       }
       
    }

    calculate_btn.addEventListener("click",gcdCalculator );
