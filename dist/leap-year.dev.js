"use strict";

function isLeapYear(year) {
  if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2020)); // Output: true

console.log(isLeapYear(2022)); // Output: false

console.log(isLeapYear(1900)); // Output: false

console.log(isLeapYear(2000)); // Output: true