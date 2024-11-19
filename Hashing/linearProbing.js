function linearProbing(hashSize, arr, sizeOfArray){
    let hashTable = new Array(hashSize);
    for(let j = 0;j<hashSize;j++){
        hashTable[j] = -1;
    }
    for (let i = 0; i < sizeOfArray; i++)
    {
        let index = arr[i] % hashSize;
        let startIndex= index;
        // If the calculated index is already occupied, perform linear probing
        // we have to ignore the duplicate case hashTable[index] !== arr[i]
        while (hashTable[index] !== -1 && hashTable[index] !== arr[i])
        {
            index = (index + 1) % hashSize;
            //when the array is full, we need to come out.
            if (index === startIndex) {
                break;
            }
        } 
        //This is for that case where sizeOfArray > hashSize , or else it will overrite it.
        if(hashTable[index] === -1){
            hashTable[index] = arr[i];
        }  
    }
    return hashTable;
}

console.log(linearProbing(10,[4,14,24,44], 4));
console.log(linearProbing(10,[9,99,999,9999], 4));