function countDigits(x) {
  let count = 0;
  while (x > 0) {
    x = Math.floor(x / 10);
    count++;
  }
  return count;
}
//  complexity - O(d) where d is no of digits
console.log(countDigits(97323));
// 1st Iteration - Math.floor(9732.3) = 9732
// 2nd Iteration - Math.floor(973.2) = 973
// 3rd Iteration - Math.floor(97.3) = 97
// 4th Iteration - Math.floor(9.7) = 9
// 5th Iteration - Math.floor(0.9) = 0
// loop ends
