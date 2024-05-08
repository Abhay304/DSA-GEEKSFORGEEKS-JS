// Method 1
function DigitsInFactorial(N) {
  if (N <= 3) {
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

// Of course! Let's apply the explanation to x = 12345x=12345:

// _{10} is base 10
// log_{10}(x)log
// 10
// ​
//  (x): Compute the base-10 logarithm of xx:
// log_{10}(12345) \approx 4.09131log
// 10
// ​
//  (12345)≈4.09131
// Floor value of log_{10}(x)log
// 10
// ​
//  (x): Take the floor of the result:
// \text{floor}(4.09131) = 4floor(4.09131)=4
// Adding 1 to the floor value: Add 1 to account for the units place digit:
// 4 + 1 = 54+1=5
// So, the floor of log_{10}(12345)log
// 10
// ​
//  (12345) plus 1 is 5. This indicates that the number 12345 has 5 digits when written in base 10.
