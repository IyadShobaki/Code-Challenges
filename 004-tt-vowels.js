const vowels = ["a", "e", "i", "o", "u"];

function findVowels(str) {
  // improve
  return str
    .split(" ")
    .reduce((sum, letter) => (vowels.includes(letter) ? sum + 1 : sum), 0);

  // write your code here
  //   let count = 0;
  //   str.split("").forEach((letter) => {
  //     if (vowels.includes(letter)) count++;
  //   });
  //   return count;
}

console.log(findVowels("hello")); // 2
console.log(findVowels("hi there")); // 3
console.log(findVowels("good morning")); // 4
