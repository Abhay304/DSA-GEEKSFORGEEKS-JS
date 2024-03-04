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

function PalindromeCheckUsingRecursion1(s, i) {
  if (i > s.length / 2) {
    return true;
  }

  return (
    s[i] === s[s.length - i - 1] && PalindromeCheckUsingRecursion1(s, i + 1)
  );
}
console.log(PalindromeCheckUsingRecursion1("abccba", 0));
