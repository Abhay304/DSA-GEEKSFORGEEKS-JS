// this has 1 and 0 is decreasing order

function countOnes(arr, N) {
  let start = 0;
  let end = N - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === 1) {
      if (mid === N - 1 || arr[mid + 1] === 0) {
        return mid + 1;
      } else {
        start = mid + 1;
      }
    } else if (arr[mid] === 0) {
      end = mid - 1;
    }
  }
  return 0;
}
// this has 0 and 1 is non decreasing order
function countOnes1(arr, n) {
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === 0) {
      start = mid + 1;
    } else {
      if (mid === 0 || arr[mid - 1] === 0) {
        return n - mid;
      } else {
        end = mid - 1;
      }
    }
  }
  return 0;
}

const arr = [1, 1, 1, 1, 1, 1, 1, 0];
const arr1 = [0, 0, 0, 0, 0, 0, 1, 1, 1];
console.log(countOnes(arr, arr.length));
console.log(countOnes1(arr1, arr1.length));
