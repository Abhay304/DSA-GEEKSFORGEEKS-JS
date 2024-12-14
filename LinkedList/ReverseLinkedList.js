const { printList } = require('./utils')

class Node {
    constructor(val) {
        this.next = null;
        this.value = val;
    }
}


function reverseLinkedList(head) {
    if (head === null) {
        return head;
    }
    let curr = head;
    let prev = null;

    while (curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

function reverseLinkedListRecursive(head) {
    if (head === null || head.next === null) {
        return head;
    }
    let rest_head = reverseLinkedListRecursive(head.next);
    let rest_tail = head.next;
    rest_tail.next = head;
    head.next = null;
    return rest_head;
}


function reverseLinkedListRecursive2(curr, prev = null) {
    if (curr === null) {
        return prev;
    }
    let next = curr.next;
    curr.next = prev;
    return reverseLinkedListRecursive2(next, curr)
}



let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
console.log(printList(head));
head = reverseLinkedList(head);
console.log(printList(head));
head = reverseLinkedListRecursive(head);
console.log(printList(head));
head = reverseLinkedListRecursive2(head);
console.log(printList(head));
