const findTriplets =(arr, n) =>{
    arr = arr.sort((a,b)=>a-b);
    for(let i = 0;i<n;i++){
        let j =i+1;
        let k = n-1;
        while(j<k){
            let sum = arr[i] +arr[j] + arr[k];
            if(sum >0){
                k--;
            }else if(sum<0){
                j++;
            }else{
                return 1;
            }
        }
    }
    return 0;
}

console.log(findTriplets([1,0,0],3))