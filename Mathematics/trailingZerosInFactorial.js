// Method 1
function trailingZerosInFactorial1(x) {
  let factorial = 1;
  let count = 0;
  for (let i = 2; i <= x; i++) {
    factorial = factorial * i;
  }
  while (factorial % 10 === 0) {
    count++;
    factorial = Math.floor(factorial / 10);
  }
  return count;
}
// complexity - it will be linear O(n).

// Method 2
function trailingZerosInFactorial2(x) {
  let factorial = 1;
  let count = 0;
  for (i = x; i >= 2; i--) {
    factorial = factorial * i;
  }
  while (factorial % 10 === 0) {
    count++;
    factorial = Math.floor(factorial / 10);
  }
  return count;
}
// complexity - it will be linear O(n).

// Method 3
/* 
factorial of 15 - 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
Analysis from above code
1. so we have to find pair of 5 and 2 and we know that count of 2 will be more than 5 so mainly we have to
find the count of no of 5.
2. so count of 5 in a number increases with 5*5 = 25 (count is 2 ), 5*5*5 = 125 (count is 3)
*/
function trailingZerosInFactorial3(x) {
  let count = 0;
  for (let i = 5; i <= x; i = i * 5) {
    count = count + Math.floor(x / i);
  }
  return count;
}
// 1st Iteration - count = 0 + 25 = 25;
// 2nd Iteration - count = 25 + 5 = 30;
// 3rd Iteration - count = 30 +1 = 31
// 4th Iteration -

// complexity - it will be linear 0(logn).
console.log("Method 1 -", trailingZerosInFactorial1(15));
console.log("Method 2 -", trailingZerosInFactorial2(15));
console.log("Method 3 -", trailingZerosInFactorial3(125));
