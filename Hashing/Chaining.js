class HASH {
    constructor(bucket) {
        this.BUCKET = bucket;
        this.table = new Array(bucket);
        for (let i = 0; i < bucket; i++) {
            this.table[i] = [];
        }
    }

    hashFunction(x) {
        return x % this.BUCKET;
    }

    insertItem(item) {
        let hashIndex = this.hashFunction(item);
        this.table[hashIndex].push(item);
    }

    deleteItem(item) {
        let hashIndex = this.hashFunction(item);
        let i = this.table[hashIndex].indexOf(item);
        if (i !== -1) {
            this.table[hashIndex].splice(i, 1);
        }
    }

    displayHash() {
        for (let i = 0; i < this.BUCKET; i++) {
            console.log(i + " --> " + this.table[i].join(" --> "));
        }
    }
}


let a = [15, 11, 27, 8, 12];
let n = a.length;

let h = new HASH(7);
for (let i = 0; i < n; i++) {
    h.insertItem(a[i]);
}

h.deleteItem(12);
h.displayHash();