class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

function heightOfTree(root) {
    if (root === null) {
        return 0;
        // return -1 //change to -1 for another convention
    } else {
        let leftHeight = heightOfTree(root.left);
        let rightHeight = heightOfTree(root.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
}


let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(50);
root.right.right.right = new Node(60);
console.log(heightOfTree(root));