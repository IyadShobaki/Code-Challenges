// Find the biggest sum of 3 consecutive numbers in the array
const sumConsecutive = (arr) => {
  if (arr.length < 3) return { index: 0, count: 0 };

  let maxSum = arr[0] + arr[1] + arr[2];
  let currentSum = maxSum;
  let maxIndex = 0;

  // Sliding window: remove left element, add right element
  for (let i = 3; i < arr.length; i++) {
    currentSum = currentSum - arr[i - 3] + arr[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
      maxIndex = i - 2;
    }
  }

  return { index: maxIndex, count: maxSum };
};

console.log(sumConsecutive([1, 2, 3, 6, 7, 8, 9, 9, 9, 1, 2, 3]));

/* 
I can see the current solution finds characters that aren't the same as their neighbors. This approach has inefficiencies:

Splits string unnecessarily - converting to array when we can use string indexing
Repeats boundary checks - special cases for first and last characters
O(n) space - stores all indexes instead of just the first non-repeating char
Let me optimize it with a cleaner, more efficient approach:


Done! Here are the optimizations:

Improvements:

Eliminated array conversion - uses string indexing directly (saves memory allocation)
Unified loop logic - single loop handles all cases; undefined !== char naturally handles boundaries
Cleaner code - no special cases for first/last elements
Same time complexity - O(n) traversal
Better space efficiency - no intermediate array
The function now correctly returns indexes of all non-consecutive (non-repeating) characters. For "aabbeccdd", it returns [4, 5] 
(the two 'e' characters that don't have the same neighbor). */
/* 

// Find the biggest sum of 3 consecutive numbers in the array
const sumConsecutive = (arr) => {
  const result = { index: 0, count: 0 };
  for (let i = 0; i < arr.length - 3; i++) {
    const total = arr[i] + arr[i + 1] + arr[i + 2];
    if (total > result.count) {
      result.index = i;
      result.count = total;
    }
  }
  return result;
};

console.log(sumConsecutive([1, 2, 3, 6, 7, 8, 9, 9, 9, 1, 2, 3])); */
