// Best practices  // Codewar
function closeCompare(a, b, m = 0) {
  return Math.abs(a - b) <= m ? 0 : Math.sign(a - b);
}
// My solution
// function closeCompare(a, b, margin) {
//   if (margin === undefined) margin = 0;

//   return Math.abs(a - b) <= margin ? 0 : a < b ? -1 : 1;
// }

console.log(closeCompare(5, 5)); // 0
console.log(closeCompare(3, 5, 3)); // 0
console.log(closeCompare(3, 5, 0)); // -1
console.log(closeCompare(4, 5)); // -1
console.log(closeCompare(6, 5)); // 1
