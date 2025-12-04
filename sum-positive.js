// Codewars

const arr = [1, -2, 3, 4, 5]; // 13

function positiveSum(arr) {
  return arr.filter((n) => n > 0).reduce((a, b) => a + b, 0);
}

//console.log(positiveSum(arr));

// HackerRank Bitwise Operators
function getMaxLessThank(n, k) {
  let max = 0;
  for (let a = n; a > 1; a--) {
    for (let b = a - 1; b > 0; b--) {
      if ((a & b) < k && (a & b) > max) {
        max = a & b;
      }
    }
  }
  return max;
}

console.log(getMaxLessThank(5, 2));
