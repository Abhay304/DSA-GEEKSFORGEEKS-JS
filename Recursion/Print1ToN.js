function Print1toN(N) {
  if (N === 0) {
    return;
  }
  Print1toN(N - 1);
  console.log(N);
}

console.log("Print1toN", Print1toN(16));
