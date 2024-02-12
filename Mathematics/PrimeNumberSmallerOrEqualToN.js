const checkForPrimeNumber1 = require("./CheckForPrimeNumber");

//Method -1 - Navie Solution
function PrimeNumberSmallerOrEqualToN(num) {
  for (let i = 2; i <= num; i++) {
    if (checkForPrimeNumber1(i)) {
      console.log(i);
    }
  }
}
// complexity O(sqrt n * n)
PrimeNumberSmallerOrEqualToN(17);

// Method 2
//Sieve of Eratosthenes
function PrimeNumberSmallerOrEqualToN1(num) {
  let sieveArr = Array(num).fill(true);
  for (let i = 2; i * i <= num; i++) {
    if (sieveArr[i]) {
      for (let j = 2 * i; j <= num; j = j + i) {
        sieveArr[j] = false;
      }
    }
  }
  return sieveArr;
}

console.log("Method - 2", PrimeNumberSmallerOrEqualToN1(17));

function PrimeNumberSmallerOrEqualToN2(num) {
  let sieveArr = Array(num).fill(true);
  for (let i = 2; i <= num; i++) {
    if (sieveArr[i]) {
      console.log(i);
      for (let j = i * i; j <= num; j = j + i) {
        sieveArr[j] = false;
      }
    }
  }
}

console.log("Method - 3", PrimeNumberSmallerOrEqualToN2(17));
