
class QUEUE {
    constructor() {
        this.items = [];
    }

    //Inserts an element at the end of the queue i.e. at the rear end.
    enqueue() {
        this.items.push(element);
        console.log("enqueued to queue");
    }
    //removes and returns an element that is at the front end of the queue
    dequeue() {
        if (this.isEmpty()) {
            console.log("Underflow")
        } else {
            return this.items.shift();
        }
    }

    size() {
        return this.items.length;
    }

    front() {
        if (this.size()) {
            return this.items[0];
        } else {
            console.log('No elements in Queue');
        }
    }

    rear() {
        if (this.size()) {
            return this.items[this.size() - 1];
        } else {
            console.log('No elements in Queue');
        }
    }

    isEmpty() {
        return this.size() === 0;
    }
}