// function that accepts amount of money as input
// cashier
// make change
// return the minimum amout of coins

function minimumAmountOfChange(number) {
  const changeArr = [25, 10, 5, 1];
  const total = { 25: 0, 10: 0, 5: 0, 1: 0 };
  let count = number;
  for (let c of changeArr) {
    while (count >= c) {
      total[c] += 1;
      count -= c;
    }
  }
  return total;
}

console.log(minimumAmountOfChange(1));
