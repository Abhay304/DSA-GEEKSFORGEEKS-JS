// front points to the first element in the queue.
// rear points to the position where the next element will be inserted.

// new will be added as rear
// old will be getting from front
//FIFO old will go out first

// we remove item from front and insert from rear
class MyQueue {
    constructor() {
        this.front = 0;
        this.rear = 0;
        this.arr = new Array(100005);
    }

    /**
     * @param {number} x
    */

    //Function to push an element x in a queue.
    push(x) {
        this.arr[this.rear] = x;
        this.rear = (this.rear + 1) % this.arr.length;
    }

    /**
     * @returns {number}
    */

    //Function to pop an element from queue and return that element.
    pop() {
        if (this.front === this.rear) {
            this.front = this.rear = 0;
            return -1;
        }
        const dequeuedValue = this.arr[this.front];
        this.front = (this.front + 1) % this.arr.length;
        return dequeuedValue;
    }
}