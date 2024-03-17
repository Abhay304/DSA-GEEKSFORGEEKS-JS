// Naive solution is to traverse from left to right, - Complexity 0(n)

// Efficient solution
function lastIndexOfASearchedElem(arr, n, d) {
  let start = 0;
  let end = n - 1;
  let resIndex = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > d) {
      end = mid - 1;
    } else if (arr[mid] < d) {
      start = mid + 1;
    } else {
      resIndex = mid;
      break;
    }
  }

  if (resIndex !== -1) {
    for (let i = resIndex; i < n; i++) {
      if (arr[i] === d) {
        resIndex = i;
      } else {
        break;
      }
    }
  }
  return resIndex;
}

// 2nd Efficient Solution
function lastIndexOfASearchedElem1(arr, n, d) {
  let start = 0;
  let end = n - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > d) {
      end = mid - 1;
    } else if (arr[mid] < d) {
      start = mid + 1;
    } else {
      // first we are using binary search and then usinh below technique we are traversing from start
      if (mid === n - 1 || arr[mid + 1] !== d) {
        return mid;
      } else {
        start = mid + 1;
      }
    }
  }
} // complexity O(Log N)

const arr = [10, 10, 10, 20, 20, 20, 20, 40, 50];
const arr1 = [10, 10, 10, 10, 10, 20];
console.log(lastIndexOfASearchedElem(arr, arr.length, 20));
console.log(lastIndexOfASearchedElem(arr1, arr1.length, 20));
console.log(lastIndexOfASearchedElem1(arr, arr.length, 20));
console.log(lastIndexOfASearchedElem1(arr1, arr1.length, 20));

module.exports = {
  lastIndexOfASearchedElem1,
};
