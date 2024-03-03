//  if N is 12 then R will be 21

// Method 1
function PowerOfReversedNumber(N, R) {
  //User function Template for javascript
  if (R == 1) {
    return N;
  }
  if (R == 0) {
    // anything Power 0 will be 1
    return 1;
  }

  let res = N * PowerOfReversedNumber(N, R - 1);
  return res % 1000000007;
}

console.log(PowerOfReversedNumber(12, 21));
console.log(PowerOfReversedNumber(4, 4));

// More optimied Solution
