/*
   lab.js - add button!

   Requirements: jQuery must be loaded for this script to work.

   Author: Mandy Xie
   Date: November 5th 2024
*/

$("#challenges").append("<button id='button-challenge'>Explode</button>");

$("button-challenge").click(function(){
    $("#challenges").toggleClass("special");
})
