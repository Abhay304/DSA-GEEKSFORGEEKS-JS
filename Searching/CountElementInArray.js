const { firstIndexOfASearchedElem1 } = require("./FirstIndexOfASearchedElem");
const { lastIndexOfASearchedElem1 } = require("./LastIndexOfASearchedElem");
function countElementInArray(arr, n, d) {
  let firstOccIndex = firstIndexOfASearchedElem1(arr, n, d);

  if (firstOccIndex === -1) {
    return 0;
  }
  let lastOccIndex = lastIndexOfASearchedElem1(arr, n, d);

  return lastOccIndex - firstOccIndex + 1;
}

const arr = [10, 10, 10, 20, 20, 20, 20, 40, 50];
const arr1 = [10, 10, 10, 10, 10, 20];

console.log("--------------------");
console.log(countElementInArray(arr, arr.length, 20));
console.log(countElementInArray(arr1, arr1.length, 10));
console.log(countElementInArray(arr1, arr1.length, 18880));
