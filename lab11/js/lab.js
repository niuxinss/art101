/*
   lab.js - gets input from user and outputs something else

   Requirements: jQuery must be loaded

   Author: Mandy Xie
   Date: November 11th 2024
*/

//sort string

function sortString(inputString) {
    return inputString.split('').sort().join('');
}

$("#submit").click(function(){
    const userName = $("#user-name").val();
    userNameSorted = sortString(userName);
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});
