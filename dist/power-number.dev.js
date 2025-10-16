"use strict";

// My solution  // Codewar
function numberToPower(number, power) {
  var total = 1;

  for (var i = 1; i <= power; i++) {
    total = number * total;
  }

  return total;
}

console.log(numberToPower(3, 2)); // -> 9 ( = 3 * 3 )

console.log(numberToPower(2, 3)); // -> 8 ( = 2 * 2 * 2 )

console.log(numberToPower(10, 6)); // -> 1000000