
class Node {
    constructor(val) {
        this.value = val;
        this.prev = null;
        this.next = null;
    }
}


function reverseDoublyLinkedList(head) {
    if (head === null || head.next === null) {
        return head;
    }
    let curr = head;
    let prev = null;

    while (curr !== null) {
        prev = curr;
        [curr.prev, curr.next] = [curr.next, curr.prev];
        curr = curr.prev;
    }
    return prev;
}

function printlist(head) {
    let curr = head;
    let string = "";
    while (curr !== null) {
        string += curr.value + " ";
        curr = curr.next;
    }
    return string;
}

let head = new Node(20);
let temp1 = new Node(30);
let temp2 = new Node(40);
let temp3 = new Node(50);

head.next = temp1;
temp1.prev = head;
temp1.next = temp2;
temp2.prev = temp1;
temp2.next = temp3;
temp3.prev = temp2;

console.log(printlist(head));
head = reverseDoublyLinkedList(head);
console.log(printlist(head));



