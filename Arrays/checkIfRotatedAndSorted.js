function checkIfRotatedAndSorted(arr, num) {
  let firstPointer = 0;
  let secondPointer = 1;
  let isIncreasing = 0;
  while (secondPointer < num) {
    if (arr[firstPointer] > arr[secondPointer]) {
      isIncreasing++;
    }
    firstPointer++;
    secondPointer++;
  }

  if (arr[0] < arr[num - 1]) {
    return false;
  }

  return isIncreasing === 1;
}
// basically the hint is , in a single , it will not increase twice
// For this Hint check this - https://www.youtube.com/watch?v=e22ns5G0qKY
const arr = [3, 4, 6, 1, 2, 5];
console.log(checkIfRotatedAndSorted(arr, arr.length));

// second method
function checkIfRotatedAndSorted1(arr, num) {
  let firstPointer = 0;
  let isIncreasing = 0;
  // (firstPointer + 1) % num this is the trick for +1 counter
  while (firstPointer < num) {
    if (arr[firstPointer] > arr[(firstPointer + 1) % num]) {
      isIncreasing++;
    }
    firstPointer++;
  }

  //   we don't need this edge case also as 5+1%6 = 0, so if a[last] is greater then a[0] then this is also false
  //   if (arr[0] < arr[num - 1]) {
  //     return false;
  //   }
  return isIncreasing === 1;
}

console.log(checkIfRotatedAndSorted1(arr, arr.length));
