// Decreasing order
function BubbleSort(arr, N) {
  for (let i = N - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

// Increasing order
function BubbleSort1(arr, n) {
  let swapped = false;
  for (let i = 0; i < n; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (swapped === false) break;
  }
  return arr;
}

const arr = [2, 4, 34, 32, 214, 313, 2, 4, 1];
console.log(BubbleSort(arr, arr.length));
console.log(BubbleSort1(arr, arr.length));
