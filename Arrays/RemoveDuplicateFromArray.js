function RemoveDuplicateFromArray(arr, n) {
  let res = 1;
  for (let i = 1; i < n; i++) {
    if (arr[res - 1] !== arr[i]) {
      arr[res] = arr[i];
      res++;
    }
  }
  return arr.slice(0, res);
}

const arr = [10, 20, 20, 30, 30, 30];
console.log(RemoveDuplicateFromArray(arr, arr.length));
