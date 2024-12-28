class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

// Big O(N)
// Space - O(H) height of the tree
function inOrder(root) {
    if (root !== null) {
        inOrder(root.left);
        console.log(root.key);
        inOrder(root.right);
    }
}




let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(50);
inOrder(root);
// left root Right
// 20 10 40 30 50 