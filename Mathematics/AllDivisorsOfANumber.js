// Method 1
function AllDivisorOfANumber(num) {
  let opt = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      opt.push(i);
    }
  }
  return opt;
}
// Complexity O(n)

// Method 2
function AllDivisorOfANumber1(num) {
  let opt = [];
  // all the factors are in pairs
  // so we are printing pairs
  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      opt.push(i);
      // check is added to take care of edge case like for 25 , 5 will be printed twice
      if (i !== num / i) {
        opt.push(num / i);
      }
    }
  }
  return opt;
}

// Method 3 - This is same, it just we are taking care of sorting
function AllDivisorOfANumber2(num) {
  let opt = [];
  let temp = [];
  //  all the factors are in pairs
  // so we are printing pairs
  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      opt.push(i);
      // check is added to take care of edge case like for 25 , 5 will be printed twice
      if (i !== num / i) {
        temp.unshift(num / i);
      }
    }
  }
  return [...opt, ...temp];
}

console.log("Method-1", AllDivisorOfANumber(24));
console.log("Method-1", AllDivisorOfANumber(91));
console.log("Method-1", AllDivisorOfANumber(40));
console.log("Method-2", AllDivisorOfANumber1(30));
console.log("Method-2", AllDivisorOfANumber1(40));
console.log("Method-2", AllDivisorOfANumber1(25));
console.log("Method-3", AllDivisorOfANumber2(30));
console.log("Method-3", AllDivisorOfANumber2(40));
console.log("Method-3", AllDivisorOfANumber2(25));
