/*
    Given a sorted array arr[] of size N without duplicates, and given a value x. 
    Floor of x is defined as the largest element K in arr[] 
    such that K is smaller than or equal to x. Find the index of K(0-based indexing). 
*/
function findFloor(arr, n, x) {
  for (let i = n - 1; i >= 0; i--) {
    if (x >= arr[i]) {
      return i;
    }
  }
  return -1;
}

// Complexity O(N)

// using Binary Search
function findFloor1(arr, n, x) {
  let low = 0;
  let high = n - 1;
  if (arr[high] < x) {
    return high;
  }
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > x) {
      if (arr[mid - 1] < x) {
        return mid - 1;
      }
      high = mid - 1;
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

const arr = [1, 3, 13, 16, 78, 90];
console.log(findFloor(arr, arr.length, 15));
console.log(findFloor1(arr, arr.length, 15));
