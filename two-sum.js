/* Write a function that accepts two parameters: 
an array of numbers and a target value. Your function 
should return the indices of two items in the array whose 
sum is the target value. You can assume that there is always
 exactly one solution, and you may not use the same element twice.  */

const twoSum = (arr, target) => {
  const ladger = {};

  for (let i = 0; i < arr.length; i++) {
    //if (ladger.hasOwnProperty(target - arr[i])) {
    if (ladger[target - arr[i]]) {
      return [ladger[target - arr[i]], i];
    } else {
      ladger[arr[i]] = i;
    }
  }
};

console.log(twoSum([15, 11, 2, 7], 9));

/* function twoSum1(arr, target) {
  // outer Loop
  for (let i = 0; i < arr.length; i++) {
    // inner Loop
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`Checking ${arr[i]} and ${arr[j]}...`);

      // if the current elements sum to 'target', return them
      if (arr[i] + arr[j] === target) {
        console.log("Found a match!");
        return [i, j];
      }
    }
  }
}
console.log(twoSum1([15, 11, 2, 7], 9)); */
