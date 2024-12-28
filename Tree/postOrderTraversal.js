class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

function postOrder(root) {
    if (root !== null) {
        postOrder(root.left);
        postOrder(root.right);
        console.log(root.key);
    }
}


let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(50);
postOrder(root);
// Left Right Root
// 20 40 50 30 10