// Naive solution
function LargestElementInArray(arr) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j] && arr[index] < arr[j]) {
        index = j;
      }
    }
  }
  return index;
} // complexity 0(n^2)

// Efficient Approach
// two pointer theorem
function LargestElementInArray1(arr) {
  let start = 0;
  let nextStart = 1;

  while (nextStart < arr.length) {
    if (arr[start] < arr[nextStart]) {
      start = nextStart;
    }
    nextStart++;
  }
  return start;
} // complexity 0(n)

const arr = [10, 600, 23, 600, 6, 4];
console.log(LargestElementInArray(arr));
console.log(LargestElementInArray1(arr));
