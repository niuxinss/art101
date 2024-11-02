/** Author: Mandy Xie
 * Date: November 1st 2024
*
*
**/

function add10(x){
    return x + 10;
}

//test 

console.log ("2 plus 10 is? ", add10(2));
console.log ("17 plus 10 is? ", add10(17));

array = [1, 2, 3, 4, 5,];
console.log ("My array is ", array);

var result = array.map(add10);
console.log("Adding 10 to my array: ", result);

// multiply by 10 test

var result = array.map(function(x){
    return x * 10
})
console.log("Multiplying my array by 10: ", result)

