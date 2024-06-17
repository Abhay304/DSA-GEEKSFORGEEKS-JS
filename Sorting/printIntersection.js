function printIntersection(arr1, arr2, N, M) {
  let i = 0;
  let j = 0;
  let res = [];
  let prev = null; // Keep track of the previously added element
  while (i < N && j < M) {
    if (arr1[i] > arr2[j]) {
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      if (prev !== arr1[i]) {
        res.push(arr1[i]);
        prev = arr1[i];
      }
      i++;
      j++;
    }
  }
  return res.length ? res : [-1];
}

const opArr1 = [2, 4, 6, 7, 8];
const opArr2 = [1, 2, 3, 4];
console.log(printIntersection(opArr1, opArr2, opArr1.length, opArr2.length));
