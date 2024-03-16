function rotateArrayByD(arr, d, n) {
  let i = 0;
  let temp = [];
  while (i < n) {
    temp[i] = arr[(i + d) % n];
    i++;
  }
  for (let i = 0; i < n; i++) {
    arr[i] = temp[i];
  }
  return arr;
}
const arr = [1, 2, 3, 4, 5];
console.log(rotateArrayByD(arr, 2, arr.length));
