function search(root, key) {
    if (!root || root.key === key) {
        return root;
    }

    return root.key < key
        ? search(root.right, key)
        : search(root.left, key);
}

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

function inOrder(root) {
    if (root) {
        inOrder(root.left);
        console.log(root.key);
        inOrder(root.right);
    }
}

function insert(node, key) {
    if (!node) {
        return new Node(key);
    }

    if (key < node.key) {
        node.left = insert(node.left, key);
    } else if (key > node.key) {
        node.right = insert(node.right, key);
    }

    return node;
}

const root = null;
let node = insert(root, 50);
insert(node, 30);
insert(node, 20);
insert(node, 40);
insert(node, 70);
insert(node, 60);
insert(node, 80);

inOrder(node);