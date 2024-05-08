// Naive Solution
function CountInversionInArray(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        res++;
      }
    }
  }

  return res;
  //   complexity - O(n^2)
}

// Adcanced Method using Merge Sort

const arr = [2, 4, 1, 3];
console.log(CountInversionInArray(arr));
