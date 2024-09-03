function lomutoPartition(arr,low,high){
    let pivot = arr[high];
    let i = low-1;

    for(let j= low;j<=high-1;j++){
        if(arr[j]<pivot){
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
    }
    [arr[i+1],arr[high]] = [arr[high],arr[i+1]];
    return arr;
}

let arr = [10,80,30,90,40,50,70];
let n = arr.length;
arr = lomutoPartition(arr,0,n-1);
console.log(arr);
