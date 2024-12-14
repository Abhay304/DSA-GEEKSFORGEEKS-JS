const { printList } = require('./utils')

class Node {
    constructor(val) {
        this.next = null;
        this.value = val;
    }
}

function nthNodeFromEnd(head, pos) {
    if (head === null) return;
    let firstPos = head;
    let secPos = head;
    while (pos && secPos != null) {
        secPos = secPos.next;
        pos--;
    }
    if (pos && secPos === null) {
        return;
    }
    while (secPos !== null) {
        firstPos = firstPos.next;
        secPos = secPos.next;
    }
    return firstPos.value;
}



let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(30);
head.next.next.next.next = new Node(40);
head.next.next.next.next.next = new Node(50);
head.next.next.next.next.next.next = new Node(60);
console.log(printList(head));
console.log(nthNodeFromEnd(head, 6));