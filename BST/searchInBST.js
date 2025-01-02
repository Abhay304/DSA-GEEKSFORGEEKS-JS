class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

function searchInBST(root, key) {
    if (!root) {
        return false;
    }
    else if (root.key === key) {
        return true;
    } else {
        // if root.key is large then go to left side as the value needs to be searched is smaller
        return root.key > key ? searchInBST(root.left, key) : searchInBST(root.right, key)
    }
}


let root = new Node(40); // Root node
root.left = new Node(20);  // Left subtree
root.right = new Node(60); // Right subtree
root.left.left = new Node(10);   // Left of left subtree
root.left.right = new Node(30);  // Right of left subtree
root.right.left = new Node(50);  // Left of right subtree
root.right.right = new Node(70); // Right of right subtree
console.log(searchInBST(root, 20));
console.log(searchInBST(root, null));
console.log(searchInBST(root, 60));
console.log(searchInBST(root, 80));