class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

function printNodeAtKDistance(root, k, temp = []) {
    if (root === null) {
        return;
    }
    if (k === 0) {
        temp.push(root.key);
    } else {
        printNodeAtKDistance(root.left, k - 1, temp);
        printNodeAtKDistance(root.right, k - 1, temp);
    }
    return temp;

}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(50);
root.right.right.right = new Node(60);
console.log(printNodeAtKDistance(root, 0));