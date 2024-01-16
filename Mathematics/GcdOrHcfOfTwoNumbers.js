// GCD or HCF of two numbers

// Method 1
function findGCD1(x1, x2) {
  let num = 1;
  for (let i = 2; i <= Math.min(x1, x2); i++) {
    if (x1 % i === 0 && x2 % i === 0) {
      num = i;
    }
  }
  return num;
}
//  Complexity is O(min(x1,x2))

// Method 2
// This solution is little bit good as we are transerving from greater to smaller number
function findGCD2(x1, x2) {
  let num = 1;
  for (let i = Math.min(x1, x2); i >= 2; i--) {
    if (x1 % i === 0 && x2 % i === 0) {
      return i;
    }
  }
  return num;
}
//  Complexity is O(min(x1,x2))

console.log("Method - 1", findGCD1(100, 200));
console.log("Method - 2", findGCD2(100, 200));
