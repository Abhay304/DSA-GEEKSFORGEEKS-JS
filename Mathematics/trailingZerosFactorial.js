// Method 1
function factorialOfN1(x) {
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
function factorialOfN2(x) {
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

console.log(factorialOfN1(15));
console.log(factorialOfN2(15));
