function lomutoPartition(arr, low, high){
    let pivot = arr[high];
    let i = low-1;
    for(let j = low;j<=high-1;j++){
        if(arr[j]<pivot){
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
    }
    [arr[i+1],arr[high]] = [arr[high],arr[i+1]];
    return i+1;
}

function hoarePartition(arr, low, high){
    let piviot = arr[low];
    let i = low-1;
    let j = high+1;
    while(true){
        do{
            i++;
        }while(arr[i]<piviot);
        do{
            j--;
        }while(arr[j]>piviot);
        if(i>=j) return j;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

//lomutoPartition
function quickSort(arr, low, high){
    while(low<high){
        let pivotIndex = lomutoPartition(arr,low,high);
        arr = quickSort(arr,low,pivotIndex-1);
        arr = quickSort(arr,pivotIndex+1,high);
        return arr;
    }
    return arr;
}

//hoarePartition
function quickSort1(arr, low, high){
    while(low<high){
        let pivotIndex = hoarePartition(arr,low,high);
        arr = quickSort1(arr,low,pivotIndex);
        arr = quickSort1(arr,pivotIndex+1,high);
        return arr;
    }
    return arr;
}
console.log(quickSort([2, 1, 6, 10, 4, 1, 3, 9, 7],0,8));
console.log(quickSort1([2, 1, 6, 10, 4, 1, 3, 9, 7],0,8));