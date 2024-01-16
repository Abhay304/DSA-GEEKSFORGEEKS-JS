// Trick to reverse also
function isPalindrome(x) {
  let rev = 0;
  let temp = x;
  while (temp !== 0) {
    let lastDigit = temp % 10; // trick to find the last digit
    rev = rev * 10 + lastDigit; // trick to add next digits
    temp = Math.floor(temp / 10); // trick to remove the last digit
  }

  return rev === x;
}
//  complexity - O(d) where d is no of digits
console.log(isPalindrome(3663));
// 1st Iteration - lastDigit = 3 , rev = 3, temp = 366
// 2nd Iteration - lastDigit = 6 , rev = 36, temp = 36
// 3rd Iteration - lastDigit = 6 , rev = 366, temp = 3
// 4th Iteration - lastDigit = 3 , rev = 3663, temp = 0
// loop ends
