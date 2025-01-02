class Node {
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
}

// using Stack
function zigZagTraversalUsingStack(root) {
    let ans = [];
    // if null then return
    if (root === null) {
        return ans;
    }
    let currentLevel = [];
    let nextLevel = [];
    currentLevel.push(root);
    let leftToRight = true
    while (currentLevel.length > 0) {

        let currentStackSize = currentLevel.length;
        while (currentStackSize > 0) {
            let curr = currentLevel.pop();
            ans.push(curr.data);

            if (leftToRight) {
                if (curr.left) {
                    nextLevel.push(curr.left);
                }
                if (curr.right) {
                    nextLevel.push(curr.right);
                }
            } else {
                if (curr.right) {
                    nextLevel.push(curr.right);
                }
                if (curr.left) {
                    nextLevel.push(curr.left);
                }
            }
            currentStackSize--;
        }
        leftToRight = !leftToRight;
        [currentLevel, nextLevel] = [nextLevel, currentLevel];
    }
    return ans
}

// using queue 

function zigZagTraversalUsingQueue(root) {
    let ans = [];
    // if null then return
    if (root === null) {
        return ans;
    }
    let queue = [];
    queue.push(root);
    let leftToRight = true;
    while (queue.length > 0) {

        let queueSize = queue.length;
        while (queueSize > 0) {

            let curr;
            if (leftToRight) {
                curr = queue.shift();
            } else {
                curr = queue.pop();
            }
            ans.push(curr.data);
            if (leftToRight) {
                if (curr.left) {
                    queue.push(curr.left);
                }
                if (curr.right) {
                    queue.push(curr.right);
                }
            } else {
                if (curr.right) {
                    queue.unshift(curr.right);
                }
                if (curr.left) {
                    queue.unshift(curr.left);
                }
            }

            queueSize--;
        }

        leftToRight = !leftToRight;
    }
    return ans;
}


let root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.right.right = new Node(11);
root.left.left = new Node(4);
root.left.right = new Node(12);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);

console.log(zigZagTraversalUsingStack(root));
console.log(zigZagTraversalUsingQueue(root));
// 20 22 8 4 12 11 14 10 