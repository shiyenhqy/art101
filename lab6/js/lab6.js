/**
 * lab 6
 * @author Shiyen Yang <shhyang@ucsc.edu>
 * @date October 2023
 */

// Define Variables
myTransport = ["Toyota Matrix", "Bus", "Walking"];

// Main Ride
myMainRide = {
  make: "Toyota",
  model: "Matrix",
  color: "Silver",
  year: 2006,
  age: function() {
    return 2023 - this.year;
  }
}

// Output
document.writeln("Kinds of Transportation I Use: ", myTransport, "</br>"); 
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
    