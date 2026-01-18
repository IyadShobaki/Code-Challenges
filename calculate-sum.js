/**
 * Sum an array of finite numbers.
 * @param {number[]} [arr=[]] - Array of finite numbers.
 * @returns {number} Sum of the numbers.
 * @throws {TypeError} If input is not an array or contains non-finite numbers.
 */
function calculateSum(arr = []) {
  if (!Array.isArray(arr)) throw new TypeError("calculateSum expects an array");
  return arr.reduce((acc, val) => {
    if (typeof val !== "number" || !Number.isFinite(val)) {
      throw new TypeError("Array must contain only finite numbers");
    }
    return acc + val;
  }, 0);
}

function calculateSumFloat(arr = []) {
  if (!Array.isArray(arr)) throw new TypeError("calculateSum expects an array");
  return arr.reduce((acc, val) => {
    if (typeof val !== "number" || !Number.isFinite(val)) {
      throw new TypeError("Array must contain only finite numbers");
    }
    return acc + val;
  }, 0);
}

const numbersString =
  "951.08 995.48 861.35 110.67 715.42 219.25 253.1 209.35 57.13";

const numbersArr = numbersString.split(" ");
const numbers = numbersArr.map((number) => {
  return Number(number);
});
// console.log(numbers);
console.log(Math.round(calculateSum(numbers)));
// function calculateSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
