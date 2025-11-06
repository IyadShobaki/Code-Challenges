"use strict";

function countPositivesSumNegatives(input) {
  var countPositives = 0;
  var sumNegative = 0;

  if (input === undefined || input == null || input.length == 0) {
    return [];
  } else {
    input.forEach(function (number) {
      number > 0 ? countPositives++ : sumNegative += number;
    });
  }

  return countPositives > 0 || sumNegative != 0 ? [countPositives, sumNegative] : [];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
console.log(countPositivesSumNegatives([-85, -98, -43, -57]));
console.log(countPositivesSumNegatives([]));
console.log(countPositivesSumNegatives(null)); // Best practice solution Codewars

/* function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) return [];

  var positive = 0;
  var negative = 0;

  for (var i = 0, l = input.length; i < l; ++i) {
    if (input[i] > 0) ++positive;
    else negative += input[i];
  }

  return [positive, negative];
} */
// Clever

/* function countPositivesSumNegatives(input) {
  return input && input.length
    ? [
        input.filter((p) => p > 0).length,
        input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
      ]
    : [];
} */