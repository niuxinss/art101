/*
   lab.js - add button!

   Requirements: need jQuery loaded in html file

   Author: Mandy Xie
   Date: November 5th 2024
*/

$("#challenges.minor-section").append("<button id='one'>buttonz");
$("#problems.minor-section").append("<button id='two'>button!!");
$("#results.minor-section").append("<button id ='three'>button?!");

$("#one").click(function(){
    $("#challenges.minor-section").toggleClass("special");
})

$("#two").click(function(){
    $("#problems.minor-section").toggleClass("special1");
})

$("#three").click(function(){
    $("#results.minor-section").toggleClass("special2");
})
