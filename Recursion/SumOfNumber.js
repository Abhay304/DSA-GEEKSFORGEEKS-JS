function SumOfNumber(N) {
  if (N === 0) {
    return 0;
  }
  return (N % 10) + SumOfNumber(Math.floor(N / 10));
}

console.log(SumOfNumber(345));
console.log(SumOfNumber(253));
console.log(SumOfNumber(9987));
console.log(SumOfNumber(10));
