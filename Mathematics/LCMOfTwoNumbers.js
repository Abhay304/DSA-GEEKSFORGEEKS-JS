const findGCD3 = require("./GcdOrHcfOfTwoNumbers");
// Method 1
function LCM(x1, x2) {
  for (let i = Math.max(x1, x2); i <= x1 * x2; i++) {
    if (i % x1 === 0 && i % x2 === 0) {
      return i;
    }
  }
}
//  Complexity is O(x1*x2 - max(x1,x2))

//Method 2
// for understanding check notes
function LCM1(x1, x2) {
  return (x1 * x2) / findGCD3(x1, x2);
}
//  Complexity is O(log min(x1,x2))

console.log("Method-1", LCM(4, 6));
console.log("Method-1", LCM(4, 24));
console.log("Method-1", LCM(12, 15));
console.log("Method-1", LCM(2, 8));

console.log("Method-2", LCM1(3, 7));
console.log("Method-2", LCM1(2, 8));
console.log("Method-2", LCM1(4, 24));
console.log("Method-2", LCM1(4, 6));
