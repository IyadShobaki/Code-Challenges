// CodeWar
// Write a function that takes a list of strings as an argument and returns
//  a filtered list containing the same elements but with the 'geese' removed.

const arr = [
  "Mallard",
  "Hook Bill",
  "African",
  "Crested",
  "Pilgrim",
  "Toulouse",
  "Blue Swedish",
];

filterfunc = (arr) => {
  const geese = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];
  return arr.filter((item) => {
    return !geese.includes(item);
  });
  // Best practice
  // return birds.filter(b => !geese.includes(b));
};

console.log(filterfunc(arr)); // ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
