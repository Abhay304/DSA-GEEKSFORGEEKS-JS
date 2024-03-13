function reverseArray(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function reverseInGroups(arr, n, k) {
  let i = 0;
  let j = k;
  while (i < n) {
    let j = Math.min(i + k, n);
    reverseArray(arr, i, j - 1);
    i += k;
  }
  return arr;
}
const arr = [35, 56, 48, 21, 87];
console.log(reverseInGroups(arr, arr.length, 3));
