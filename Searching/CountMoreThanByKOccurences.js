// Given an array arr of size N and an element k.
// The task is to find the count of elements in the array that appear more than n/k times.

function countOccurence(arr, size, k) {
  let count = 0;
  let obj = {};
  for (let i = 0; i < size; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = obj[arr[i]] + 1;
    } else {
      obj[arr[i]] = 1;
    }
  }

  for (let key in obj) {
    if (parseInt(size / k, 10) < obj[key]) {
      count++;
    }
  }
  return count;
}

const arr = [3, 1, 2, 2, 1, 2, 3, 3, 3];

console.log(countOccurence(arr, arr.length, 4));
