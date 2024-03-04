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

// More optimied Solution Method 2
function PowerOfReversedNumber1(N, R) {
  // code here
  if (R === 0) return 1; // Base case: N^0 = 1
  if (R === 1) return N; // Base case: N^1 = N

  let mod = BigInt(1000000007);

  // logic is if 2^6 we can write it as (2^3 * 2^3)
  if (R % 2 === 0) {
    // For Even Number
    let halfPow = PowerOfReversedNumber1(N, R / 2);
    return Number((BigInt(halfPow) * BigInt(halfPow)) % mod);
  } else {
    //  for Odd number
    let ans = PowerOfReversedNumber1(N, R - 1);
    return Number((BigInt(N) * BigInt(ans)) % mod);
  }
}
console.log(PowerOfReversedNumber1(12, 21));
console.log(PowerOfReversedNumber1(4, 4));

// Method 2
