// Count the nodes at distance K from leaf
// https://www.youtube.com/watch?v=5HeKTdNffMs
class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

function isValid(root, k) {
    if (root === null) {
        return false;
    }
    if (root.left === null && root.right === null) {
        return k === 0;
    }

    return isValid(root.left, k - 1) || isValid(root.right, k - 1);
}

// O(N×h)
//Function to return count of nodes at a given distance from leaf nodes.
function printKDistantfromLeaf(node, k) {
    let count = 0;
    if (node === null) {
        return 0;
    }
    // console.log(heightOfTree(root), k);
    if (isValid(node, k)) {
        count++;
    }

    count += printKDistantfromLeaf(node.left, k);
    count += printKDistantfromLeaf(node.right, k);
    return count;
}

// optimized
// O(n)
let st = new Set();
function helperfn(root, k, tempArr) {
    if (root === null) {
        return;
    }
    // Add current node to path
    tempArr.push(root);

    // condtion to check leaf Node
    if (root.left === null && root.right === null) {
        // If the path has at least k+1 nodes, check the k-th node from the leaf
        if (tempArr.length - 1 >= k) {
            // Adding the node that is k steps away from the leaf node
            st.add(tempArr[tempArr.length - 1 - k]);
        }
    }
    helperfn(root.left, k, tempArr);
    helperfn(root.right, k, tempArr);

    // Backtrack: remove the current node from the path
    tempArr.pop();
}
function printKDistantfromLeafOptimized(root, k) {
    st.clear();
    let tempArr = [];
    helperfn(root, k, tempArr);
    return st.size;
}

let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.left.right = new Node(8);
console.log(printKDistantfromLeaf(root, 2));
console.log(printKDistantfromLeafOptimized(root, 2));