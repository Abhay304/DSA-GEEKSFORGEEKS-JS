function sumExists(arr, N, sum) {
    arr = arr.sort((a, b) => a - b);
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        let aggSum = arr[i] + arr[j];
        if (aggSum === sum) {
            return 1;
            break;
        } else if (aggSum < sum) {
            i++;
        } else {
            j--;
        }
    }
    return 0;
}

function sumExists1(arr, N, sum) {
    let s = new Set();
    for (let i = 0; i < N; i++) {
        let dic = sum - arr[i];
        if (s.has(dic)) {
            return 1;
        }
        s.add(arr[i]);
    }
    return 0;
}

console.log(sumExists([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 12));
console.log(sumExists1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 12));