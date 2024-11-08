/*

this js file appends new elements to output div in index.html
requirements: need jQuery loaded

author: Mandy Xie
Date: November 7th, 2024

*/

function randomGenerate() {
    const text = "aRHAHRGAHRGHARGHARGHARG ARGHHH ARGHHH ARGHHH AHHHHHHHHHHHHHHHHHHHHHHH HAGRHARGARHAGRH";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;

    //random starting index to slice text constant
    const randStart = Math.floor(Math.random()*(text.length - randLen + 1))
    
    // generate random text
    return text.slice(randStart, randStart + randLen);
}

//click listener for button

$("#convo").click(function(){
    const newText = randomGenerate();
    
// append new div to output div
    $("#output").append('<div class="text"><p>'+newText+'</p></div>');


});




