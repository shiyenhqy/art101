// Author: Shiyen Yang <shhyang@ucsc.edu>
// Date November 6 2023
// Lab 8 - Anon Functions and Callbacks

// Array
array = [2, 4, 6, 8, 10]
console.log("My array", array);

function AddOne (x) {
    var results = x + 1
    return results;
}

console.log("what is 1+1? ", AddOne(1));

var result = array.map(AddOne);
console.log("Adding One:", result);

array.map (function(x) {
    var results = x * 3
    return results;
})
console.log("Multiplying by Three:", result);

