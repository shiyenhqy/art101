// Author: Shiyen Yang
// Date: 12/8/2023
// Lab 16

// Using the core $.ajax() method

//help of chatgpt to randomize comic number
function getRandomComicNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fetchAndDisplayComic() {
    // Generate a random comic number
    const randomComicNumber = getRandomComicNumber(1, 2500); // Adjust the range based on the XKCD comics available
// help form chatgpt to write how to do the random comic number
    $.ajax({
        url: `https://xkcd.com/${randomComicNumber}/info.0.json`,
        dataType: "json",
        success: function(comicObj) {
            // Display the random comic on the webpage
            $("#output").html(`
                <h2>${comicObj.title}</h2>
                <img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">
            `);
        },
        error: function(jqXHR, textStatus, errorThrown) { 
            console.log("Error:", textStatus, errorThrown);
        }
    });
}

// Add event listener to the button
$(document).ready(function() {
    fetchAndDisplayComic();

    $("#showComicButton").on("click", function() {
        fetchAndDisplayComic();
    });
});