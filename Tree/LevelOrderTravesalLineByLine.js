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
        this._size = 0;
    }

    enqueue(data) {
        let temp = new Qnode(data);
        if (this.rear === null) {
            this.rear = this.front = temp;
            ++this._size;
            return;
        }
        this._size++;
        this.rear.next = temp;
        this.rear = temp;
    }

    dequeue() {
        if (this.front === null) {
            console.log('Queue is empty');
            this._size--;
            return;
        }
        let temp = this.front;
        this.front = this.front.next;
        // If front becomes NULL, then change rear also as NULL
        if (this.front == null) {
            this.rear = null;
        }
        this._size--;
        return temp.queueNodeVal; // Return the dequeued element
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.front == null;
    }

    get size() {
        return this._size;
    }

}


function levelOrderTraversal(root) {
    if (!root) return []; // If the tree is empty, return an empty array
    let queue = new Queue(); // Assuming you have a Queue implementation
    queue.enqueue(root);
    let res = []; // Array to store the result
    while (queue.size) {
        let level = []; // Array to store nodes at the current level
        // always levelSize = queue.size , do not directly add in loop, as we are
        // updating the queue inside the loop also.
        let levelSize = queue.size; // Number of nodes at the current level

        // Traverse all nodes at the current level
        // wrong for (let i = 0; i <  queue.size; i++) never write this.
        for (let i = 0; i < levelSize; i++) {
            let curr = queue.dequeue();
            level.push(curr.treeNodeVal); // Collect the current node's data

            if (curr.left) {
                queue.enqueue(curr.left); // Enqueue left child if exists
            }
            if (curr.right) {
                queue.enqueue(curr.right); // Enqueue right child if exists
            }
        }

        res.push(level); // Push the level's nodes to the result array
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
console.log(levelOrderTraversal(root));