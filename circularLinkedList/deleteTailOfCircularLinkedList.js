class Node {
    constructor() {
        this.data;
        this.next = null;
    }

    setter(x) {
        this.data = x;
    }
}
function printlist(head) {
    let curr = head;
    let string = "";
    do {
        string += curr.data + " ";
        curr = curr.next;
    } while (curr !== head);
    return string;
}

function deleteTailOfCircularLinkedList(head) {
    if (head === null) return null;
    if (head.next === null) return null;
    let curr = head;
    while (curr.next.next !== head) {
        curr = curr.next;
    }
    curr.next = curr.next.next;
    return head;
}




let head = new Node();
head.setter(10);
head.next = new Node();
head.next.setter(20);
head.next.next = new Node();
head.next.next.setter(30);
head.next.next.next = new Node();
head.next.next.next.setter(40);
head.next.next.next.next = new Node();
head.next.next.next.next.setter(50);
head.next.next.next.next.next = head;
console.log(printlist(head))
head = deleteTailOfCircularLinkedList(head, 3);
console.log(printlist(head));