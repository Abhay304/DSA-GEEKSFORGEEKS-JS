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
function MergeThreeSortedArray(A, B, C) {
  let i = A.length - 1;
  let j = 0;
  let k = 0;
  while (i >= 0 && j < B.length) {
    if (A[i] > B[j]) {
      let temp = A[i];
      A[i] = B[j];
      B[j] = temp;
      i--;
      j++;
    } else {
      break;
    }
  }

  A = insertionSort(A);
  i = A.length - 1;
  while (i >= 0 && k < C.length) {
    if (A[i] > C[k]) {
      let temp = A[i];
      A[i] = C[k];
      C[k] = temp;
      i--;
      k++;
    } else {
      break;
    }
  }
  A = insertionSort(A);
  B = insertionSort(B);
  C = insertionSort(C);

  j = B.length - 1;
  k = 0;
  while (j >= 0 && k < C.length) {
    if (B[j] > C[k]) {
      let temp = B[j];
      B[j] = C[k];
      C[k] = temp;
      j--;
      k++;
    } else {
      break;
    }
  }
  A = insertionSort(A);
  B = insertionSort(B);
  C = insertionSort(C);
  return [...A, ...B, ...C];
}

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4, 5];
let arr3 = [1, 2, 3, 4, 5, 6];
console.log(MergeThreeSortedArray(arr1, arr2, arr3));
