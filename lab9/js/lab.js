/*
   lab.js - add button!

   Requirements: need jQuery loaded in html file

   Author: Mandy Xie
   Date: November 5th 2024
*/

$("#challenges.minor-section").append("<button>button");

$("button").click(function(){
    $("#challenges.minor-section").toggleClass("special");
})
