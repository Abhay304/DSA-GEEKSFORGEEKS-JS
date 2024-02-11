function primeFactorsOfN(num) {
  let optArr = [];
  // since 2 is the smalledt prime number
  for (let i = 2; i <= num; i++) {
    // we will extract all the common prime factor then move to another
    while (num % i === 0) {
      optArr.push(i);
      num = num / i;
    }
  }
  return optArr;
}
// complexity O(n)

// Method 2
function primeFactorsOfN1(num) {
  let optArr = [];

  // since 2 is the smallest prime number
  for (let i = 2; i * i <= num; i++) {
    // we will extract all the common prime factor then move to another
    while (num % i === 0) {
      optArr.push(i);
      num = num / i;
    }
  }
  // handling edge case
  //for better undersanding check notes or watch https://www.youtube.com/watch?v=j8Y1fDgFnsI after(12:00)min
  if (num > 1) {
    optArr.push(num);
  }
  return optArr;
}
// complexity O(sqrt n)
console.log("Method-1", primeFactorsOfN(24));
console.log("Method-1", primeFactorsOfN(201));
console.log("Method-1", primeFactorsOfN(27));
console.log("Method-1", primeFactorsOfN(19));
console.log("Method-1", primeFactorsOfN(91));

console.log("Method-2", primeFactorsOfN1(24));
console.log("Method-2", primeFactorsOfN1(201));
console.log("Method-2", primeFactorsOfN1(27));
console.log("Method-2", primeFactorsOfN1(19));
console.log("Method-2", primeFactorsOfN1(91));
