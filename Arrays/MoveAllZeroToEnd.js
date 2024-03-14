function moveAllZeroToAnd(arr, n) {
  // count is just used here to find the no of iteration
  let fp = 0;
  let sp = 0;
  while (fp < n) {
    if (arr[fp] !== 0) {
      [arr[fp], arr[sp]] = [arr[sp], arr[fp]];
      sp++;
    }
    fp++;
  }
  return arr;
}

const arr = [8, 0, 7, 0, 5];
console.log(moveAllZeroToAnd(arr, arr.length));
