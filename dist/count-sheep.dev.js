"use strict";

//// ----- My solution
// function countSheeps(sheep) {
//   let total = 0;
//   for (s of sheep){
//     if (s){
//       total += 1;
//     }
//   }
//   return total;
// }
// Best solution Codewars
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true])); // 17