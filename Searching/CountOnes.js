// this has 1 and 0 is decreasing order

function countOnes(arr, N) {
  let start = 0;
  let end = N - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === 1) {
      if (mid === N - 1 || arr[mid + 1] !== 1) {
        // count or length is always index+1
        return mid + 1;
      } else {
        start = mid + 1;
      }
    } else if (arr[mid] === 0) {
      if (mid === 0) {
        return 0;
      } else {
        end = mid - 1;
      }
    }
  }
}
const arr = [1, 1, 1, 1, 1, 1, 1, 0];
console.log(countOnes(arr, arr.length));
