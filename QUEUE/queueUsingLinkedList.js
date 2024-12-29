// JavaScript program for linked-list implementation of queue using class
class QNode {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    // Method to add an element to the queue
    enqueue(key) {
        let temp = new QNode(key);

        // If queue is empty, then new node is front and rear both
        if (this.rear == null) {
            this.front = this.rear = temp;
            return;
        }

        // Add the new node at the end of queue and change rear
        this.rear.next = temp;
        this.rear = temp;
    }

    // Method to remove an element from the queue
    dequeue() {
        // If queue is empty, return NULL
        if (this.front == null) {
            return null;
        }

        // Store previous front and move front one node ahead
        let temp = this.front;
        this.front = this.front.next;

        // If front becomes NULL, then change rear also as NULL
        if (this.front == null) {
            this.rear = null;
        }

        return temp.key; // Return the dequeued element
    }

    // Method to get the front element
    frontElement() {
        if (this.front == null) {
            return null;
        }
        return this.front.key;
    }

    // Method to get the rear element
    rearElement() {
        if (this.rear == null) {
            return null;
        }
        return this.rear.key;
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.front == null;
    }
}

// Example usage:
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Front element:", queue.frontElement()); // 10
console.log("Rear element:", queue.rearElement());   // 30

queue.dequeue();
console.log("Front element after dequeue:", queue.frontElement()); // 20
console.log("Rear element after dequeue:", queue.rearElement());   // 30

queue.dequeue();
queue.dequeue();
console.log("Queue is empty:", queue.isEmpty()); // true
