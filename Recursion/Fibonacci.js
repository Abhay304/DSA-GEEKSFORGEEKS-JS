// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones.
// It usually starts with 0 and 1. The sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.
// The Fibonacci sequence is named after the Italian mathematician Leonardo Fibonacci,
// who introduced it to the Western world in his 1202 book "Liber Abaci."
// Mathematically, the Fibonacci sequence is defined by the recurrence relation:
// F(n) = F(n-1) + F(n-2)F(n)=F(n−1)+F(n−2)
// with initial conditions:
// F(0) = 0, \quad F(1) = 1F(0)=0,F(1)=1

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(20));
