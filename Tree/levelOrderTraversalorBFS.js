// level Order Traversal OR BFS

class Qnode {
    constructor(queueNodeVal) {
        this.queueNodeVal = queueNodeVal;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(data) {
        let temp = new Qnode(data);
        if (this.rear === null) {
            this.rear = this.front = temp;
            return;
        }

        this.rear.next = temp;
        this.rear = temp;
    }

    dequeue() {
        if (this.front === null) {
            console.log('Queue is empty');
            return;
        }
        let temp = this.front;
        this.front = this.front.next;
        // If front becomes NULL, then change rear also as NULL
        if (this.front == null) {
            this.rear = null;
        }
        return temp.queueNodeVal; // Return the dequeued element
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.front == null;
    }

}

// optimized way
function levelOrderTraversalBFS(root) {
    let queue = new Queue();
    queue.enqueue(root);
    let res = [];
    while (!queue.isEmpty()) {
        let curr = queue.dequeue();
        res.push(curr.treeNodeVal)
        if (curr.left) {
            queue.enqueue(curr.left)
        }
        if (curr.right) {
            queue.enqueue(curr.right)
        }
    }
    return res;
}

class Node {
    constructor(treeNodeVal) {
        this.treeNodeVal = treeNodeVal;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(50);
root.right.right.right = new Node(60);
console.log(levelOrderTraversalBFS(root));
