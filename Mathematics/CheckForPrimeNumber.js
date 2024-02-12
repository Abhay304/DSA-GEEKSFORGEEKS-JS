//Method 1
function checkForPrimeNumber(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// complecity O(n)

//Method 2-
// For 17 - The loop iterates through i = 2, i = 3, i = 4.
// When i = 5 (the square of 5 is 25, which is greater than 17), the loop stops.

// For 25 - The loop iterates through i = 2, i = 3, i = 4, i = 5.
// A factor (5) is found at i = 5, and the loop stops.

// The condition i * i <= num is used to optimize the loop. Since factors of a number come in pairs,
// one of them is necessarily less than or equal to the square root of the number.
// Therefore, it's sufficient to check up to the square root of num.
function checkForPrimeNumber1(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// complecity O(sqrt n)

console.log("Method -1", checkForPrimeNumber(17));
console.log("Method -1", checkForPrimeNumber(12));
console.log("Method -1", checkForPrimeNumber(15));
console.log("-------");
console.log("Method -2", checkForPrimeNumber1(2));
console.log("Method -2", checkForPrimeNumber1(7));
console.log("Method -2", checkForPrimeNumber1(9));

module.exports = checkForPrimeNumber1;
