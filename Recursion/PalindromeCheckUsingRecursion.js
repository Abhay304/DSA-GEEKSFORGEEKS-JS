function PalindromeCheckUsingRecursion(value, start, end) {
  if (start >= end) {
    return true;
  }
  if (value[start] === value[end]) {
    return PalindromeCheckUsingRecursion(value, start + 1, end - 1);
  } else {
    return false;
  }
}

console.log(PalindromeCheckUsingRecursion("abccba", 0, 5));
