// Author: Shiyen Yang
// Date: 12/8/2023
// Lab 16

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (replace with your API endpoint)
    url: "https://xkcd.com/info.0.json",
    // The data to send (adjust based on your API requirements)
    data: { 
        id: 123,
        api_key: "blahblahblah",
    },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType: "json",
    // What do we do when the API call is successful
    success: function(comicObj) {
        // Process the parts and add them to your webpage
        // Example: Assuming you have a div with an id of "comic-container" in your HTML
        $("#comic-container").html(`
            <h2>${comicObj.title}</h2>
            <img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">
        `);
    },
    // What we do if the API call fails
    error: function(jqXHR, textStatus, errorThrown) { 
        // Handle errors
        console.log("Error:", textStatus, errorThrown);
    }
});

// Add event listener to the button
$(document).ready(function() {
    $("#showComicButton").on("click", function() {
        // Trigger the AJAX call again when the button is clicked
        $.ajax({
            // Your AJAX settings here...
        });
    });
});
