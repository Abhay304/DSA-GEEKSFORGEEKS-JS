class Stack {
    constructor(value) {
        this.value = [];
        if (value) {
            this.value.push(value);
        }
    }

    pop() {
        return this.value.pop();
    }

    push(value) {
        this.value.push(value);
    }

    peek() {
        if (this.value.length == 0) {
            console.log('No Items is stack')
        }
        return this.value[this.value.length - 1];
    }

    isEmpty() {
        return this.value.length === 0;
    }

    display() {
        return this.value;
    }

    size() {
        return this.value.length;
    }
}

let stack = new Stack(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.pop();
console.log(stack.peek());
console.log(stack.display());
console.log(stack.size());
console.log(stack.isEmpty());