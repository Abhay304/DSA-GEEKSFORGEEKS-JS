class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

function sizeOfBinaryTree(root) {
    if (root === null) {
        return 0;
    }

    let leftSize = sizeOfBinaryTree(root.left);
    let rightSize = sizeOfBinaryTree(root.right);
    return leftSize + rightSize + 1;
}


let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(50);
root.right.right.right = new Node(60);
console.log(sizeOfBinaryTree(root));