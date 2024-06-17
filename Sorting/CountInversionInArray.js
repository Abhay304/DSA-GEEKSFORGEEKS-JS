// Naive Solution
function CountInversionInArray(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        res++;
      }
    }
  }
  return res;
  //   complexity - O(n^2)
}

// Advanced Method using Merge Sort
function CountInversionInArray1(arr) {
  if (arr.length < 2) {
    return { arr: arr, inversions: 0 }; // Return both the array and inversion count
  }
  let mid = Math.floor(arr.length / 2);
  let leftSide = CountInversionInArray1(arr.slice(0, mid));
  let rightSide = CountInversionInArray1(arr.slice(mid, arr.length));
  let mergeResult = merge(leftSide.arr, rightSide.arr);
  return {
    arr: mergeResult.arr,
    inversions:
      leftSide.inversions + rightSide.inversions + mergeResult.inversions,
  };
}
function merge(leftArr, rightarr) {
  let resArr = [];
  let i = 0;
  let j = 0;
  let k = 0;
  let res = 0;

  while (i < leftArr.length && j < rightarr.length) {
    if (leftArr[i] < rightarr[j]) {
      resArr[k] = leftArr[i];
      i++;
      k++;
    } else {
      resArr[k] = rightarr[j];
      j++;
      k++;
      res = res + (leftArr.length - i);
    }
  }

  while (i < leftArr.length) {
    resArr[k] = leftArr[i];
    i++;
    k++;
  }

  while (j < rightarr.length) {
    resArr[k] = rightarr[j];
    j++;
    k++;
  }
  return { arr: resArr, inversions: res };
}

const arr = [2, 4, 1, 3];
console.log(CountInversionInArray(arr));
console.log(CountInversionInArray1(arr));
