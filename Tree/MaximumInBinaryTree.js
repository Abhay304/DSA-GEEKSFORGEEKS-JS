class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function maximumInBinaryTree(root) {
    if (root === null) {
        return Number.NEGATIVE_INFINITY;
    }
    let leftMax = maximumInBinaryTree(root.left);
    let rightMax = maximumInBinaryTree(root.right);
    return Math.max(root.data, leftMax, rightMax);
}






let root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.right.right = new Node(11);
root.left.left = new Node(4);
root.left.right = new Node(12);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);
console.log(maximumInBinaryTree(root))