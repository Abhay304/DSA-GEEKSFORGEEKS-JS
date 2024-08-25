function partionFunc(arr,p){
    let temp = [];
    for(let i =0;i<arr.length;i++){
        if(arr[i]<=arr[p] && i!=p){
            temp.push(arr[i]);
        }
    }
    temp.push(arr[p]);
    for(let j =0;j<arr.length;j++){
        if(arr[j]>arr[p]){
            temp.push(arr[j]);
        }
    }

    return temp;
}


console.log(partionFunc([12,11,5,13,6,9,12,8,11,8], 5))