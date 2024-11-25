const { printList } = require('./utils')

class Node {
    constructor(val) {
        this.next = null;
        this.value = val;
    }
}


function deleteLastNodeOfLinkedList(head) {
    if (head.next === null) {
        return null;
    }
    let curr = head;
    while (curr.next.next !== null) {
        curr = curr.next;
    }
    curr.next = null;
    return head;
}


let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next = new Node(50);
head.next.next.next.next = new Node(60);
console.log(printList(head));
head = deleteLastNodeOfLinkedList(head);
console.log(printList(head));

