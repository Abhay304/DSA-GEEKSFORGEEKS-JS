class Deque {
    constructor() {
        this.arr = [];
    }

    // Push element x to the front of the deque
    push_front(x) {
        this.arr.unshift(x);
    }

    // Push element x to the back of the deque
    push_back(x) {
        this.arr.push(x);
    }

    // Pop element from the back of the deque
    pop_back() {
        return this.arr.pop();
    }

    // Return the front element of the deque
    front() {
        return this.arr[0];
    }

    // Get the size of the deque
    size() {
        return this.arr.length;
    }
}
