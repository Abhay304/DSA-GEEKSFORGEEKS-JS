function MergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftSide = arr.slice(0, mid);
  let rightSide = arr.slice(mid, arr.length);

  return merge(MergeSort(leftSide), MergeSort(rightSide), mid);
}
function merge(leftArr, rightarr) {
  let res = [];

  //   easy method
  //   while (leftArr.length && rightarr.length) {
  //     if (leftArr[0] > rightarr[0]) {
  //       res.push(rightarr.shift());
  //     } else {
  //       res.push(leftArr.shift());
  //     }
  //   }

  //   while (leftArr.length) {
  //     res.push(leftArr.shift());
  //   }

  //   while (rightarr.length) {
  //     res.push(rightarr.shift());
  //   }

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < leftArr.length && j < rightarr.length) {
    if (leftArr[i] < rightarr[j]) {
      res[k] = leftArr[i];
      i++;
      k++;
    } else {
      res[k] = rightarr[j];
      j++;
      k++;
    }
  }

  while (i < leftArr.length) {
    res[k] = leftArr[i];
    i++;
    k++;
  }

  while (j < rightarr.length) {
    res[k] = rightarr[j];
    j++;
    k++;
  }
  return res;
}

const arr = [5, 6, 6, 10, 10, 15, 15, 20, 40, 60];

console.log(MergeSort(arr));
