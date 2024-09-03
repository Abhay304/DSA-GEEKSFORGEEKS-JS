

const intersectionOfTwoArray = (arr1, arr2) =>{
    let i =0;
    let j = 0;
    while(i<arr1.length && j<arr2.length){
            if(i>0 && arr1[i-1] === arr1[i]){
                i++;
            }
            else if(arr1[i]<arr2[j]){
                    i++;
            }else if(arr1[i]>arr2[j]){
                j++;
            }else{
                console.log(arr1[i]);
                i++;
                j++;
            }
    }
}


console.log(intersectionOfTwoArray([2,10,20,20,40,60],[10,20,20,20]));
