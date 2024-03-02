function PrintNto1(N) {
  if (N === 0) {
    return;
  }
  PrintNto1(N - 1);
  console.log(N);
}

console.log("PrintNto1", PrintNto1(16));
