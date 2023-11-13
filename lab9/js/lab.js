/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Wes Modes
   Date: 2023
*/

// Add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// Add click listener to the challenge button
$("#button-challenge").click(function(){
    // Now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

// Add buttons to other sections (Problems and Results)
$("#problems").append("<button class='special-button'>Make Special</button>");
$("#results").append("<button class='special-button'>Make Special</button>");

// Add a click listener to all special buttons
$(".special-button").click(function(){
    // Use $(this).parent() to select the section that the button is in
    $(this).parent().toggleClass("special");
});
