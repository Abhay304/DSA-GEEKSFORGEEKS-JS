function MeanAndMedian(A, N) {
  median = () => {
    A.sort(function (a, b) {
      return a - b;
    });
    if (N % 2 != 0) {
      return A[Math.floor(N / 2)];
    }
    return Math.floor((A[N / 2] + A[N / 2 - 1]) / 2);

    //Your code here
    //If median is fraction then convert it to integer and return
  };
  mean = () => {
    let res = A[0];
    for (let i = 1; i < N; i++) {
      res = res + A[i];
    }
    return Math.floor(res / N);
  };
  return {
    median,
    mean,
  };
}
const arr = [10, 600, 23, 601, 6, 4];
const resObj = new MeanAndMedian(arr, arr.length);
console.log(resObj.mean());
console.log(resObj.median());
