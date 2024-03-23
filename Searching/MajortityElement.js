function isMajority(a, size, cand) {
  let i = 0;
  let count = 0;
  for (i = 0; i < size; i++) {
    if (a[i] == cand) count++;
  }
  if (count > parseInt(size / 2, 10)) return cand;
  else return -1;
}

function majorityElement(arr, size) {
  let count = 1;
  let num = arr[0];
  for (let i = 1; i < size; i++) {
    if (num !== arr[i]) {
      count = count - 1;
    } else {
      count = count + 1;
    }

    if (count === 0) {
      count = 1;
      num = arr[i];
    }
  }

  return isMajority(arr, size, num);
}
const arr = [3, 1, 1, 3, 1, 2];
const arr1 = [17, 19, 9, 5, 3, 6, 17, 7, 18, 16, 18, 11, 3, 15, 2];

console.log(majorityElement(arr, arr.length));
console.log(majorityElement(arr1, arr1.length));
