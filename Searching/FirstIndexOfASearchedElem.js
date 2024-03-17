// Naive solution is to traverse from left to right, - Complexity 0(n)

// Efficient solution
function firstIndexOfASearchedElem(arr, n, d) {
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
    for (let i = resIndex; i > 0; i--) {
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
function firstIndexOfASearchedElem1(arr, n, d) {
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
      if (mid === 0 || arr[mid - 1] !== d) {
        return mid;
      } else {
        end = mid - 1;
      }
    }
  }
} // complexity O(Log N)

const arr = [10, 10, 10, 20, 20, 20, 20, 40, 50];
console.log(firstIndexOfASearchedElem(arr, arr.length, 20));
console.log(firstIndexOfASearchedElem1(arr, arr.length, 20));

module.exports = {
  firstIndexOfASearchedElem1,
};
