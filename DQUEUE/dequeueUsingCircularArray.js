let MAX = 100;
class Deque {
    constructor(size) {
        this.arr = new Array(MAX);
        this.front = -1;
        this.rear = 0;
        this.size = size;
    }

    // Checks whether Deque is full or not.
    isFull() {
        return ((this.front == 0 && this.rear == this.size - 1) ||
            this.front == this.rear + 1);
    }

    // Checks whether Deque is empty or not.
    isEmpty() {
        return (this.front == -1);
    }

    // Inserts an element at front
    insertfront(key) {
        // check whether Deque if  full or not
        if (this.isFull()) {
            document.write("Overflow<br>");
            return;
        }

        // If queue is initially empty
        if (this.front == -1) {
            this.front = 0;
            this.rear = 0;
        }

        // front is at first position of queue
        else if (this.front == 0)
            this.front = this.size - 1;

        else // decrement front end by '1'
            this.front = this.front - 1;

        // insert current element into Deque
        this.arr[this.front] = key;
    }

    // function to inset element at rear end
    // of Deque.
    insertrear(key) {
        if (this.isFull()) {
            document.write(" Overflow <br>");
            return;
        }

        // If queue is initially empty
        if (this.front == -1) {
            this.front = 0;
            this.rear = 0;
        }

        // rear is at last position of queue
        else if (this.rear == this.size - 1)
            this.rear = 0;

        // increment rear end by '1'
        else
            this.rear = this.rear + 1;

        // insert current element into Deque
        this.arr[this.rear] = key;
    }

    // Deletes element at front end of Deque
    deletefront() {
        // check whether Deque is empty or not
        if (this.isEmpty()) {
            document.write("Queue Underflow<br>");
            return;
        }

        // Deque has only one element
        if (this.front == this.rear) {
            this.front = -1;
            this.rear = -1;
        }
        else
            // back to initial position
            if (this.front == this.size - 1)
                this.front = 0;

            else // increment front by '1' to remove current
                // front value from Deque
                this.front = this.front + 1;
    }

    // Delete element at rear end of Deque
    deleterear() {
        if (this.isEmpty()) {
            document.write(" Underflow<br>");
            return;
        }

        // Deque has only one element
        if (this.front == this.rear) {
            this.front = -1;
            this.rear = -1;
        }
        else if (this.rear == 0)
            this.rear = this.size - 1;
        else
            this.rear = this.rear - 1;
    }

    // Returns front element of Deque
    getFront() {
        // check whether Deque is empty or not
        if (this.isEmpty()) {
            document.write(" Underflow<br>");
            return -1;
        }
        return this.arr[this.front];
    }

    // function return rear element of Deque
    getRear() {
        // check whether Deque is empty or not
        if (this.isEmpty() || this.rear < 0) {
            document.write(" Underflow<br>");
            return -1;
        }
        return this.arr[this.rear];
    }

}