// Author: Shiyen Yang <shhyang@ucsc.edu>
// Date: 13 November 2023
// Lab 9 - Libraries and jQuery: Experimenting with jQuery

$(".challenge").append("<button id='button-challenge'>Make Special</button>");
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#button-challenge").toggleClass("special");
});

$(".problems").append("<button id='button-problems'>Make Special</button>");
$("#button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#button-problems").toggleClass("special");
});

$(".results").append("<button id='button-results'>Make Special</button>");
$("#button-results").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#button-results").toggleClass("special");
});
