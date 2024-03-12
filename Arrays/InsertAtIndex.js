function insertAtIndex(arr, sizeOfArray, index, element) {
  for (let i = sizeOfArray - 1; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = element;
  return arr;
}

console.log(insertAtIndex([1, 2, 3, 4, 5], 6, 2, 90));
