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

//Method 3 using euclidean algo
function findGCD3(x1, x2) {
  if (x2 === 0) {
    return x1;
  }
  return findGCD3(x2, x1 % x2);
}
//  Complexity is O(log min(x1,x2))

// Method 4 same approach using euclidean algo but without recussion
function findGCD4(x1, x2) {
  while (x2 !== 0) {
    x1 = x1 % x2;
    [x1, x2] = [x2, x1];
  }
  return x1;
}

console.log("Method - 1", findGCD1(100, 200));
console.log("Method - 2", findGCD2(100, 200));
console.log("Method - 3", findGCD3(100, 200));
console.log("Method - 3", findGCD3(25, 60));
console.log("Method - 3", findGCD3(60, 25));
console.log("Method - 3", findGCD3(13, 7));
console.log("Method - 4", findGCD4(100, 200));
console.log("Method - 4", findGCD4(60, 25));
console.log("Method - 4", findGCD4(60, 25));

module.exports = findGCD3;
