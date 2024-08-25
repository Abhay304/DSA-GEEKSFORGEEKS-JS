//naive solution
// this is little more faster
const findUnion = (arr1, arr2, n, m) =>{   
    let  s = new Set(arr1);
    for(let i = 0;i<arr2.length;i++){
        s.add(arr2[i]);
    }
    return [...s].sort((a,b) => a-b);
}

// kind of merge sort
const findUnion1 = (arr1, arr2, n, m) =>{   
        let i=0;
        let j = 0;
        let res = [];
        let k =0;
        while(i<n && j <m){
            
            while(i+1<n && arr1[i] ===arr1[i+1]){
                i++;
            }
            while(j+1 <m && arr2[j] ===arr2[j+1]){
                j++;
            }
            if(arr1[i]<arr2[j]){
                res[k] = arr1[i];
                i++;
            }else if(arr1[i]>arr2[j]){
                res[k] = arr2[j];
                j++;
            }else{
                res[k] = arr2[j];
                i++;
                j++;
            }
            k++;
        }
        
        while(i<n){
            while(i+1<n && arr1[i] ===arr1[i+1]){
                i++;
            }
            res[k] = arr1[i];
            i++;
            k++;

        }
        
        while(j<m){
            while(j+1 <m && arr2[j] ===arr2[j+1]){
                j++;
            }
            res[k] = arr2[j];
            j++;
            k++;

        }
        
        return res;
}


console.log(findUnion([-7 ,8],[-8,-3,8],2,3));
console.log(findUnion1([-7 ,8],[-8,-3,8],2,3));
console.log(findUnion([-9,-9,0],[-8,-3,-3,-2,0,1,2,2,6],3,9));
console.log(findUnion1([-9,-9,0],[-8,-3,-3,-2,0,1,2,2,6],3,9));