
class Node {
    constructor(val) {
        this.value = val;
        this.prev = null;
        this.next = null;
    }
}


function insertAtEnd(head, val) {
    let node = new Node(val);
    if (head === null) {
        return node;
    }

    let curr = head;
    while (curr.next !== null) {
        curr = curr.next;
    }
    curr.next = node;
    node.prev = curr;
    return head;
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

head.next = temp1;
temp1.prev = head;
temp1.next = temp2;
temp2.prev = temp1;
console.log(printlist(head));
head = insertAtEnd(head, 50);
console.log(printlist(head));



