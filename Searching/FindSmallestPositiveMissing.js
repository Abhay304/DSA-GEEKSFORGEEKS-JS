function findMissing(arr, n) {
  //code here
  for (let i = 0; i < n; i++) {
    let currentNumber = arr[i];
    let correctPostionOfTheNum = currentNumber - 1;

    if (currentNumber > 0 && currentNumber < n) {
      if (currentNumber !== arr[correctPostionOfTheNum]) {
        [arr[correctPostionOfTheNum], currentNumber] = [
          currentNumber,
          arr[correctPostionOfTheNum],
        ];
        i--;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    // if number and position are not matching
    if (i + 1 !== arr[i]) {
      return i + 1;
    }
  }
  return n + 1;
}

const arr = [0, -10, 1, 3, -20];
const arr1 = [
  -25, 38, 24, -17, 7, 31, 43, 8, 20, 49, -33, -11, 19, 13, -28, 44, 23, -3,
  -19, 12, 32, 40, 42, 41, 7, -35, -29, 7, 24, 41, -3, 1, -19, -29, -13, -10, 4,
  -20, 48,
];
console.log(findMissing(arr, arr.length));
console.log(findMissing(arr1, arr1.length));
