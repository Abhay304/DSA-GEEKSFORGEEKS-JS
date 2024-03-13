// using 2 pointer
function ReverseAnArray(arr) {
  let firstP = 0;
  let length = arr.length - 1;
  let temp = [];
  while (firstP <= length) {
    temp[firstP] = arr[length - firstP];
    firstP++;
  }
  return temp;
}
// using swaping
function ReverseAnArray1(arr) {
  let i = 0;
  let len = arr.length - 1;
  while (i < len) {
    // let temp = arr[len];
    // arr[len] = arr[i];
    // arr[i] = temp;
    // swaping in js
    [arr[i], arr[len]] = [arr[len], arr[i]];
    i++;
    len--;
  }
  return arr;
}

const arr = [3, 4, 7, 6, 0];
console.log(ReverseAnArray(arr));
console.log(ReverseAnArray1(arr));
