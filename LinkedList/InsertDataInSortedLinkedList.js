const { printList } = require('./utils')

class Node {
    constructor(val) {
        this.next = null;
        this.value = val;
    }
}

function insertDataInSortedLinkedList(head, node) {
    if (head == null) {
        return node;
    }
    let curr = head;
    if (curr.value > node.value) {
        node.next = curr;
        return node;
    }
    while (curr.next !== null && curr.next.value < node.value) {
        curr = curr.next;
    }
    node.next = curr.next;
    curr.next = node;
    return head;
}


let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
head.next.next.next.next.next = new Node(60);
console.log(printList(head));
head = insertDataInSortedLinkedList(head, new Node(9));
console.log(printList(head));