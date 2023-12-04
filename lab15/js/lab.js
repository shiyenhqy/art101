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
            // What to do when the API call is successful
            success: function (data) {
                // Access the URL of the GIF from the response
                var gifUrl = data.image;
            
                // Create an image element
                var gifElement = $('<img>', {
                    src: gifUrl,
                    alt: 'Yes/No GIF',
                    class: 'result-gif'
                });
            
                // Access the answer from the response
                var answer = data.answer;
            
                // Create a paragraph element for the text result
                var textElement = $('<p>').text("Answer: " + answer);
            
                // Create a container div for both the image and the text
                var resultsContainer = $('<div>', {
                    class: 'results-container'
                });
            
                // Append the image and text to the container div
                resultsContainer.append(gifElement, textElement);
            
                // Clear the previous content and append the container to the output div
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


