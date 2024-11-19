/*
   lab.js - loop time

   Requirements: jQuery must be loaded

   Author: Mandy Xie
   Date: November 18th 2024
*/

// for loop 1-100
function fizzBuzz() {
    let str="";

    for (let i=1; i <= 200; i++) {
        let output = "";

        if (i%3 == 0){
            output += "Fizz";             
        }
        if (i%5 == 0){
            output += "Buzz";
        }

        if (i%7 ==0) {
        output+="Boom";  
        }
       
        if (!output){ 
            console.log(i); 
            str+=i + "<br>";  
        }
        else{
            console.log(output);
            str+=output+"<br>";    
        }
}

console.log(str)

$("#output").html(str);

}
fizzBuzz();