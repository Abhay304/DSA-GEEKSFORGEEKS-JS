function LargestAndSecondLargest(arr) {
  let first = 0;
  let second = -1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[first]) {
      second = first;
      first = i;
    } else if (arr[i] < arr[first]) {
      if (second === -1 || arr[second] < arr[i]) {
        second = i;
      }
    }
  }
  if (second === -1) {
    return [arr[first], -1];
  }
  return [arr[first], arr[second]];
} // complexity 0(n)

const arr = [10, 600, 23, 600, 6, 4];
console.log(LargestAndSecondLargest(arr));
