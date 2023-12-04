// Author: Shiyen Yang <shhyang@ucsc.edu>
// Date: 12/04/2023
// Lab 15

// Wait for the document to be ready
$(document).ready(function () {
    // Add a click event to the button with the ID "activate"
    $('#activate').click(function () {
        // Using jQuery AJAX call
        $.ajax({
            // The URL for the request (replace with your API endpoint)
            url: "https://yesno.wtf/api",
            // The data to send (will be converted to a query string)
            // Whether this is a POST or GET request
            type: "GET",
            // The type of data we expect back
            dataType: "json",
            // code help from chatgpt to show the gif result and answer result
            success: function (data) {

                var gifUrl = data.image;
        
                var gifElement = $('<img>', {
                    src: gifUrl,
                    alt: 'Yes/No GIF',
                    class: 'result-gif'
                });
        
                var answer = data.answer;
        
                var textElement = $('<p>').text("Answer: " + answer);
            
                var resultsContainer = $('<div>', {
                    class: 'results-container'
                });
            
                resultsContainer.append(gifElement, textElement);
            
                $('#output').empty().append(resultsContainer);
            },          
              
            // What to do if the API call fails
            error: function (jqXHR, textStatus, errorThrown) {
                // Log the error
                console.log("Error:", textStatus, errorThrown);
                // You may also update the output div with an error message
                $('#output').text("Error occurred while fetching data");
            }
        });
    });
});


