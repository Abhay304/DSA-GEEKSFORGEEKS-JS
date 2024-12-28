class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

function preOrder(root) {
    if (root !== null) {
        console.log(root.key);
        preOrder(root.left);
        preOrder(root.right);
    }
}


let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(50);
preOrder(root);
// Root Left Right
//  10 20 30 40 50