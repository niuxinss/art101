/*
   lab.js - house sorting

   Requirements: jQuery must be loaded

   Author: Mandy Xie
   Date: November 11th 2024
*/

//sort string

function sortingHat(str) {
    let length = str.length;
    let mod = length % 4;

    if (mod == 0){
        str = "House Awesome";
    } else if (mod == 1) {
        str = "House Kinda Awesome";
    } else if (mod == 2) {
        str = "House Super Awesome";
    } else if (mod == 3) {
        str = "House Extra Super Awesome";
    }
    return str;
}

$("#button").click(function() {
    let name = $("#input").val();  
    console.log(name);
    let house = sortingHat(name);  
    console.log(house);
    $("#output").html("<h1>" + house + "</h1>");
});