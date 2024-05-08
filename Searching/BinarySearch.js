// Iterative Method
function BinarySearch(arr, n, num) {
  let start = 0;
  let end = n - 1;
  //   let mid = n % 2 === 0 ? Math.floor(n / 2) : Math.floor(n / 2) + 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > num) {
      end = mid - 1;
    } else if (arr[mid] < num) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
// Time Complexity: O(log n)

// Method 2 RecursiveMethod
function BinarySearch1(arr, start, end, num) {
  let mid = Math.floor((start + end) / 2);
  if (start > end) {
    return -1;
  }
  if (arr[mid] === num) {
    return mid;
  } else if (arr[mid] > num) {
    return BinarySearch1(arr, start, end - 1, num);
  } else if (arr[mid] < num) {
    return BinarySearch1(arr, mid + 1, end, num);
  }
}

const arr = [1, 2, 56, 78, 90];
const arr1 = [1, 2, 56, 78, 90, 105];
console.log(BinarySearch(arr, arr.length, 78));
console.log(BinarySearch(arr, arr.length, 2));
console.log(BinarySearch(arr1, arr.length, 1));
console.log(BinarySearch(arr1, arr1.length, 106));
console.log(BinarySearch(arr1, arr1.length, 105));
console.log("---------------------");
console.log(BinarySearch1(arr, 0, arr.length - 1, 78));
console.log(BinarySearch1(arr, 0, arr.length - 1, 2));
console.log(BinarySearch1(arr1, 0, arr.length - 1, 1));
console.log(BinarySearch1(arr1, 0, arr1.length - 1, 106));
console.log(BinarySearch1(arr1, 0, arr1.length - 1, 105));
