// Author: Shiyen Yang <shhyang@ucsc.edu>
// Date: 20 November 2023
// Lab 11: JavaScript and Events

// Wait for the document to be ready
$(document).ready(function () {

    function sortString(inputString) {
      return inputString.split('').sort().join('');
    }
  
    $("#submit").click(function () {
      // get value of input field
      const userName = $("#user-name").val();
  
      const userNameSorted = sortString(userName);
  
      $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
    });
  });
  