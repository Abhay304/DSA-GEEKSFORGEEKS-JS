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
    if (this.isPrime(i)) {
      count++;
    }
  }
  return count;
}
