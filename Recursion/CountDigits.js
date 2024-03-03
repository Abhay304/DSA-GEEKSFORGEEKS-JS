function countDigits(n) {
  if (n <= 9) {
    return 1;
  }

  return 1 + countDigits(Math.floor(n / 10));
}
console.log(countDigits(0));
console.log(countDigits(99));
console.log(countDigits(100));
