function maxDifferenceIndex(A, N) {
  let start = 0;
  let end = N - 1;
  let max = 0;
  while (start < end) {
    if (A[start] < A[end]) {
      if (max < end - start) {
        max = end - start;
      }
    }
    end--;
    if (end === start + 1) {
      start = start + 1;
      end = N - 1;
    }
  }
  return max;
}

function maxDifferenceIndex1(A, N) {
  //   let start = 0;
  //   let end = N - 1;
  //   let max = -1;
  //   while (start < end) {
  //     if (A[start] < A[end]) {
  //       if (max < end - start) {
  //         max = end - start;
  //         start = start + 1;
  //         end = N - 1;
  //       }
  //     }
  //     end--;
  //   }
  //   return max;
}
const arr = [34, 8, 10, 3, 2, 80, 30, 33, 1];
const arr1 = [29, 29, 8, 1, 26, 10, 1, 22, 14, 26];
// console.log(maxDifferenceIndex(arr1, 10));
// console.log(maxDifferenceIndex1(arr, 9));
console.log(maxDifferenceIndex1(arr1, 10));
