"use strict";

// Codewars  Sum positive
var arr = [1, -2, 3, 4, 5]; // 13

function positiveSum(arr) {
  return arr.filter(function (n) {
    return n > 0;
  }).reduce(function (a, b) {
    return a + b;
  }, 0);
} //console.log(positiveSum(arr));
// HackerRank Bitwise Operators


function getMaxLessThanK(n, k) {
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

console.log(getMaxLessThanK(5, 2)); // HackerRank Dates

function getDayName(dateString) {
  var daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var date = new Date(dateString);
  var dayNumber = date.getDay();
  return daysArray[dayNumber];
}

console.log(getDayName("10/11/2009"));