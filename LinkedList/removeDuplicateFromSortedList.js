const { printList } = require('./utils')

class Node {
    constructor(val) {
        this.next = null;
        this.value = val;
    }
}


// Fastest way
function removeDuplicateFromSortedList(head) {
    let curr = head;
    while (curr !== null && curr.next !== null) {
        if (curr.value == curr.next.value) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
}


let head = new Node(10);
head.next = new Node(30);
head.next.next = new Node(30);
head.next.next.next = new Node(30);
head.next.next.next.next = new Node(30);
head.next.next.next.next.next = new Node(50);
head.next.next.next.next.next.next = new Node(60);
head.next.next.next.next.next.next.next = new Node(60);
console.log(printList(head));
head = removeDuplicateFromSortedList(head);
console.log(printList(head));