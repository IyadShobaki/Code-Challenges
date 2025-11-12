numbers = [2, 3, 6, 6, 5];

function getSecondLargest(numbers) {
  const maxNumber = Math.max(...numbers);
  let number = 1;
  numbers.forEach((n) => {
    if (n < maxNumber && n >= number) {
      number = n;
    }
  });
  return number;
}
console.log(getSecondLargest(numbers));
