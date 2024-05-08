// Method 1
function isThree(num) {
  if (num === 1 || num === 2 || num === 3) {
    return false;
  }
  if (num % 2 === 0 && (num % 5 === 0 || num % 3 === 0)) {
    return false;
  }
  if (Math.floor(Math.sqrt(num)) !== Math.ceil(Math.sqrt(num))) {
    return false;
  }
  for (let i = 2; i * i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function exactly3Divisors(N) {
  let count = 0;
  for (let i = 4; i <= N; i++) {
    if (isThree(i)) {
      count++;
    }
  }
  return count;
}

// Method 2

/* The isPrime(num) function determines whether a given number num is a prime number or not.
It checks if num is 0 or 1, returning false in these cases as they are not prime.
Then, it iterates from 2 up to the square root of num.
For each i, if num is divisible by i, it returns false as num is not a prime number.
If no such i is found, the function returns true, indicating that num is a prime number. */

/* The exactly3Divisors(N) function aims to count the numbers up to N that have exactly three divisors.
It initializes a count variable to 0. Then, it iterates from 2 up to the square root of N.
For each i, it checks if i is prime by calling the isPrime() function. If i is prime, it increments the count.
Finally, it returns the count, which represents the number of integers up to N that have exactly three divisors. */

function isPrime(num) {
  if (num === 0 || num === 1) {
    return false;
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function exactly3Divisors(N) {
  let count = 0;
  for (let i = 2; i * i <= N; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}
