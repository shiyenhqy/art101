// Author: Shiyen Yang <shhyang@ucsc.edu>
// Date November 17 2023
// Lab 10: JavaScript on the Web

function generateRandomText() {
    const text = "hello kitty how are you today";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  }

  // click listener for button
$("#make-convo").click(function(){
});

// get new fake dialogue
const newText = generateRandomText();

// append a new div to our output div
$("#output").append('<div class="text"><p>' + newText + '</p></div>');