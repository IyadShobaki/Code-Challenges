function reverseWords(str) {
  // Improve code
  return str.split(" ").reverse().join(" ");
  // return str.reverse();
  /*  // wrtie your code here
  if (!str || str.length === 0) return "Empty or undefined string";
  // split into array by empty space
  const array = str.split(" ");
  const newArray = [];
  let k = 0;
  for (let i = array.length - 1; i > 0; i -= 1) {
    newArray[k] = array[i];
    k++;
  }
  return newArray.join(" "); */
}

console.log(reverseWords("goal your reach to ways of lot a are there")); // "there are a lot of ways to reach your goal"
console.log(reverseWords("out them try should you")); // "you should try them out"
