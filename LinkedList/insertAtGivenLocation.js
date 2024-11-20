class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

const printList = (head) => {
    let curr = head;
    let string = "";

    while (curr != null) {
        string += curr.data + " ";
        curr = curr.next;
    }

    return string;
}

function insertAtGivenLocation(head, pos, val) {
    let curr = head;
    let newNode = new Node(val);
    if (pos == 1) {
        newNode.next = head;
        return newNode;
    }
    while (pos - 2 && curr !== null) {
        curr = curr.next;
        pos--;
    }
    if (curr === null) {
        return head;
    }
    newNode.next = curr.next;
    curr.next = newNode;
    return head;
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
console.log(printList(head));
head = insertAtGivenLocation(head, 2, 15);
// it will not add this as the index is more
head = insertAtGivenLocation(head, 7, 150);
console.log(printList(head));