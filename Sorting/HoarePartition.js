function HoarePartition(arr,lo,hi){
    let pivot = arr[lo];
    let i = lo-1;
    let j = hi+1;

    while(true){
        do{
            i = i+1;
        }while(arr[i]<pivot)
        do{
            j = j-1;
        }while(arr[j]>pivot)
        if(i>=j) return j;
        [arr[i],arr[j]] = [arr[j],arr[i]];
    }

}
 
let arr = [5,3,8,4,2,7,1,10];

let n = arr.length;

arr = HoarePartition(arr,0,n-1);
console.log(arr);