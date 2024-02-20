function myPow(x, n) {
  let res = 1;
  for (let i = 0; i < n; i++) {
    res = res * x;
  }
  return res;
}
//  complexity O(n)
console.log("Method 1", myPow(4, 5));
console.log("Method 1", myPow(4, 2));
console.log("Method 2", myPow(3, 7));

// Method 2 - recursive method
function myPow1(x, n) {
  if (n === 0) {
    return 1;
  }
  let temp = myPow1(x, Math.floor(n / 2));
  temp = temp * temp;
  if (n % 2 === 0) {
    return temp;
  } else {
    return temp * x;
  }
}
//  complexity O(log n)
console.log("Method 2", myPow1(4, 5));
console.log("Method 2", myPow1(4, 2));
console.log("Method 2", myPow1(3, 7));

// Method 3 using two pointer
function myPow2(x, n) {
  let i = 1;
  let j = n;
  let res = 1;
  while (i < j) {
    res = res * x;
    i++;
    j--;
  }
  if (n % 2 === 0) {
    return res * res;
  } else {
    return res * res * x;
  }
}
//  complexity O(log n)
console.log("Method 3", myPow2(4, 5));
console.log("Method 3", myPow2(4, 2));
console.log("Method 3", myPow2(3, 7));
