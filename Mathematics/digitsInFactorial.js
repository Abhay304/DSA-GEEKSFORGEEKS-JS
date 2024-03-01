// Method 1
function DigitsInFactorial(N) {
  if (N < 2) {
    return 1;
  }
  let digits = 0;
  for (let i = 2; i <= N; i++) {
    digits += Math.log10(i);
  }

  return Math.floor(digits) + 1;
}

// For reference check the notes of https://www.geeksforgeeks.org/count-digits-in-a-factorial-using-logarithm/
console.log(DigitsInFactorial(4));
console.log(DigitsInFactorial(-1));
console.log(DigitsInFactorial(10));
console.log(DigitsInFactorial(99));
