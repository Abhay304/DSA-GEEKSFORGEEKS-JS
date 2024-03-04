// Input:
// n = 99999
// Output: 9
// Explanation: Sum of digits of 99999 is 45
// which is not a single digit number, hence
// sum of digit of 45 is 9 which is a single
// digit number.

function DigitalRoots(n) {
  if (n === 0) {
    return 0;
  }
  let res = (n % 10) + DigitalRoots(Math.floor(n / 10));

  if (res >= 9) {
    return (res % 10) + DigitalRoots(Math.floor(res / 10));
  } else {
    return res;
  }
}

console.log(DigitalRoots(9999));
