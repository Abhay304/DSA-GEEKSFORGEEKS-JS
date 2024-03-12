function arraySortedOrNot(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
}

let arr = [7, 18, 20, 25];
console.log(arraySortedOrNot(arr));
