"use strict";

// Codewars
var arr = [1, -2, 3, 4, 5]; // 13

function positiveSum(arr) {
  return arr.filter(function (n) {
    return n > 0;
  }).reduce(function (a, b) {
    return a + b;
  }, 0);
} //console.log(positiveSum(arr));
// HackerRank Bitwise Operators


function getMaxLessThank(n, k) {
  var max = 0;

  for (var a = n; a > 1; a--) {
    for (var b = a - 1; b > 0; b--) {
      if ((a & b) < k && (a & b) > max) {
        max = a & b;
      }
    }
  }

  return max;
}

console.log(getMaxLessThank(5, 2));