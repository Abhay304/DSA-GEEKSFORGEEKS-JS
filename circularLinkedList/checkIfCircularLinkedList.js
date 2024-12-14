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



function checkIfCicularLinkedList(head) {
    let curr = head;
    while (curr !== null && curr.next !== head) {
        curr = curr.next;
    }

    if (curr === null) {
        return false;
    }
    return true;
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
console.log(checkIfCicularLinkedList(head))
console.log(printlist(head))