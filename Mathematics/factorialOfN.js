function factorialOfN(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorialOfN(x - 1);
}
// complexity - Recurrence Relation will be T(n) - Theta(1) + Theta(n-1); //
console.log(factorialOfN(4));
// 1st Iteration - factorialOfN(4) = 4 * factorialOfN(3)
// 2nd Iteration - factorialOfN(3) = 3 * factorialOfN(2)
// 3rd Iteration - factorialOfN(2) = 2 * factorialOfN(1)
// 4th Iteration - factorialOfN(1) = 1 * factorialOfN(0)
// 5th Iteration - factorialOfN(0) = 1
// loop ends
