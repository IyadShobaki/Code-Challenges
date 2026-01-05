function capitalize(str) {
  // write your code here
  const splitArr = str.split(" ");
  const result = splitArr.map((element) => {
    const newWord = element[0].toUpperCase() + element.slice(1);
    return newWord;
  });

  return result.join(" ");
}
console.log(capitalize("Bob Marley poet and a prophet")); // Bob Marley Poet And A Prophet
console.log(capitalize("Bob Marley taught me how to off it")); // Bob Marley Taught Me How To Off It
console.log(capitalize("Bob Marley walkin' like he talk it")); // Bob Marley Walkin' Like He Talk It
