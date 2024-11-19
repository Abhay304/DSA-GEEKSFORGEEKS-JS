class HashNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

const capacity = 20;
let size = 0;

let arr = [];
let dummy = new HashNode(-1, -1);

// Function to add key value pair
function insert(key, value) {
    let temp = new HashNode(key, value);
    let hashIndex = key % capacity;

    while (arr[hashIndex] != null && arr[hashIndex].key != key && arr[hashIndex].key != -1) {
        hashIndex = (hashIndex + 1) % capacity;
    }

    if (arr[hashIndex] == null || arr[hashIndex].key == -1) {
        size++;
    }

    arr[hashIndex] = temp;
}

// Function to delete a key value pair
function deleteKey(key) {
    let hashIndex = key % capacity;

    while (arr[hashIndex] != null) {
        if (arr[hashIndex].key == key) {
            arr[hashIndex] = dummy;
            size--;
            return 1;
        }
        hashIndex = (hashIndex + 1) % capacity;
    }

    return 0;
}

// Function to search the value for a given key
function find(key) {
    let hashIndex = key % capacity;
    let counter = 0;

    while (arr[hashIndex] != null) {
        if (counter++ > capacity) {
            break;
        }
        if (arr[hashIndex].key == key) {
            return arr[hashIndex].value;
        }
        hashIndex = (hashIndex + 1) % capacity;
    }

    return -1;
}

// Main function
(function main() {
    for (let i = 0; i < capacity; i++) {
        arr[i] = null;
    }

    insert(1, 5);
    insert(2, 15);
    insert(3, 20);
    insert(4, 7);

    if (find(4) != -1) {
        console.log(`Value of Key 4 = ${find(4)}`);
    } else {
        console.log("Key 4 does not exists");
    }

    if (deleteKey(4)) {
        console.log("Node value of key 4 is deleted successfully");
    } else {
        console.log("Key does not exists");
    }

    if (find(4) != -1) {
        console.log(`Value of Key 4 = ${find(4)}`);
    } else {
        console.log("Key 4 does not exists");
    }
})();
