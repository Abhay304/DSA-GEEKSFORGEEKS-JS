const { printList } = require('./utils')

class Node {
    constructor(x) {
        this.value = x;
        this.next = null;
    }
}

// Basic way
function middleLinkedList(head) {
    let firPos = head;
    let secPos = head;
    let count = 0;
    while (firPos !== null) {
        firPos = firPos.next;
        count++;
    }
    let tempCount = Math.floor(count / 2);
    while (tempCount > 0) {
        secPos = secPos.next;
        tempCount--;
    }
    return secPos.value;
}

// optimized way
function middleLinkedList1(head) {
    if (head === null) return;
    let slowP = head;
    let fastP = head;

    while (fastP !== null && fastP.next !== null && fastP.next.next !== null) {
        slowP = slowP.next;
        fastP = fastP.next.next;
    }
    return slowP.value;
}


let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
console.log(printList(head));
console.log(middleLinkedList(head));
console.log(middleLinkedList1(head));