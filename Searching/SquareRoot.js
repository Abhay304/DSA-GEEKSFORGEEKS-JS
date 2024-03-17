// Naive Solution
function SquareRoot(N) {
  //   return Math.floor(N / 2);
  for (let i = 1; i <= N; i++) {
    if (i * i === N) {
      return i;
    } else if (i * i > N) {
      return i - 1;
    }
  }
}

// using BinarySearch
function SquareRootUsingBinarySearch(N) {
  let start = 0;
  let end = N - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (mid * mid === N) {
      return mid;
    } else if (mid * mid < N) {
      if ((mid + 1) * (mid + 1) > N) {
        return mid;
      }
      start = mid + 1;
    } else {
      // if mid*mid > N
      end = mid - 1;
    }
  }
}

function SquareRootUsingBinarySearch1(N) {
  let start = 0;
  let end = N - 1;
  let res = 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (mid * mid === N) {
      return mid;
    } else if (mid * mid < N) {
      start = mid + 1;
      res = mid;
    } else {
      // if mid*mid > N
      end = mid - 1;
    }
  }
  return res;
}

console.log(SquareRoot(4));
console.log(SquareRoot(14));
console.log(SquareRoot(25));
console.log(SquareRoot(15));
console.log(SquareRoot(19));
console.log(SquareRoot(1));
console.log("--------------------------");
console.log(SquareRootUsingBinarySearch(4));
console.log(SquareRootUsingBinarySearch(14));
console.log(SquareRootUsingBinarySearch(25));
console.log(SquareRootUsingBinarySearch(15));
console.log(SquareRootUsingBinarySearch(19));
console.log(SquareRootUsingBinarySearch(1));
console.log("--------------------------");
console.log(SquareRootUsingBinarySearch1(4));
console.log(SquareRootUsingBinarySearch1(14));
console.log(SquareRootUsingBinarySearch1(25));
console.log(SquareRootUsingBinarySearch1(15));
console.log(SquareRootUsingBinarySearch1(19));
console.log(SquareRootUsingBinarySearch1(1));
