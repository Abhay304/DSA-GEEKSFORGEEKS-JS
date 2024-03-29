// Increasing order
function SelectionSort(arr, N) {
  for (let i = 0; i < N - 1; i++) {
    let min_index = i;
    for (let j = i + 1; j < N; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }

      [arr[min_index], arr[i]] = [arr[i], arr[min_index]];
    }
  }
  return arr;
}
// decreasing order
function SelectionSort1(arr, N) {
  for (let i = N - 1; i >= 0; i--) {
    let max_index = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[max_index]) {
        max_index = j;
      }

      [arr[i], arr[max_index]] = [arr[max_index], arr[i]];
    }
  }
  return arr;
}

// decreasing order part 2
function SelectionSort2(arr, N) {
  for (let i = 0; i < N - 1; i++) {
    let max_index = i;
    for (let j = i + 1; j < N; j++) {
      if (arr[j] > arr[max_index]) {
        max_index = j;
      }

      [arr[max_index], arr[i]] = [arr[i], arr[max_index]];
    }
  }
  return arr;
}

const arr = [2, 4, 313, 34, 32, 214];
console.log(SelectionSort(arr, arr.length));
console.log(SelectionSort1(arr, arr.length));
console.log(SelectionSort2(arr, arr.length));
