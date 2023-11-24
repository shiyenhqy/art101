// Author: Shiyen Yang <shhyang@ucsc.edu
// Date: 11/24/2023
// Lab 12: Conditionals

function sortingHat(str) {
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
        return "Golden Retriever"
    }
    else if (mod == 1) {
        return "Border Collie"
    }
    else if (mod == 2) {
        return "Shih Tzu"
    }
    else if (mod == 3) {
        return "German Shephard"
    }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>You are a " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
})