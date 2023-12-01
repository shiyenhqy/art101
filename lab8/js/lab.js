// Author: Shiyen Yang <shhyang@ucsc.edu>
// Date November 6 2023
// Lab 8 - Anon Functions and Callbacks

// Array
const array = [2, 4, 6, 8, 10];
console.log("My array", array);

function addOne(x) {
  var result = x + 1;
  return result;
}

console.log("What is 1+1? ", addOne(1));

var resultAddingOne = array.map(addOne);
console.log("Adding One:", resultAddingOne);

var resultMultiplyingByThree = array.map(function (x) {
  var result = x * 3;
  return result;
});

console.log("Multiplying by Three:", resultMultiplyingByThree);
