const { printList } = require('./utils')

class Node {
    constructor(x) {
        this.value = x;
        this.next = null;
    }
}

// Iterative
function searchInLinkedList(head, val) {
    let curr = head;
    let count = 1;
    while (curr !== null) {
        if (curr.value === val) {
            return count;
        }
        curr = curr.next;
        count++;
    }
    return -1;
}

//RecursiveSol

function searchInLinkedList1(head, val) {
    if (head === null) {
        return -1;
    }
    if (head.value === val) {
        return 1;
    } else {
        let pos = searchInLinkedList1(head.next, val);
        if (pos === -1) {
            return -1;
        }
        return pos + 1;
    }

}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
console.log(printList(head));
console.log(searchInLinkedList(head, 40));
console.log(searchInLinkedList(head, 10));
console.log(searchInLinkedList1(head, 40));
console.log(searchInLinkedList1(head, 10));