"use strict";

/* The Fibonacci sequence is a series of numbers where 
each number is the sum of the two preceding ones before it.
 It starts with 0, 1 and continues: 1, 2, 3, 5, 8, 13, 21, and so on. */
function computeFibonacci(number) {
  if (number <= 2) return 1;
  var fibonacci = [0, 1, 1];

  for (var i = 3; i <= number; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; //console.log(fibonacci[i]);
  }

  return fibonacci[fibonacci.length - 1];
}

console.log(computeFibonacci(10));