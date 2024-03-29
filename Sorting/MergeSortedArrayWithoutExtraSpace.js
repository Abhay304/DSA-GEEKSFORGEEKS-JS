function insertionSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Method 1
// here we are comparing last elem of arr1 with first elem of arr2
// as we have given sorted array
// https://www.youtube.com/watch?v=59VkIo4Pk3Y
function mergeSortedArray(arr1, arr2, N, M) {
  let i = N - 1;
  let j = 0;
  while (i >= 0 && j < M) {
    if (arr1[i] > arr2[j]) {
      let temp = arr1[i];
      arr1[i] = arr2[j];
      arr2[j] = temp;
      i--;
      j++;
    } else {
      break;
    }
  }
  return insertionSort(arr1).concat(insertionSort(arr2));
}

// Method 2
// Swap all the small element from arr2 to arr1
// then sort arr2 everytime
// then again first element swap arr2
function mergeSortedArray1(arr1, arr2, N) {
  for (let i = 0; i < N; i++) {
    if (arr1[i] > arr2[0]) {
      let temp = arr1[i];
      arr1[i] = arr2[0];
      arr2[0] = temp;
      arr2 = insertionSort(arr2);
    }
  }
  return [...arr1, ...arr2];
}

let arr1 = [1, 3, 5, 7];
let arr2 = [0, 2, 6, 8, 9];
console.log(mergeSortedArray(arr1, arr2, arr1.length, arr2.length));
console.log(mergeSortedArray1(arr1, arr2, arr1.length));
