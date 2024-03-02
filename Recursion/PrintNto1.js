function PrintNto1(N) {
  if (N === 0) {
    return;
  }
  console.log(N);
  PrintNto1(N - 1);
}

console.log("PrintNto1", PrintNto1(16));
