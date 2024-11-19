class Node {
    constructor() {
        this.value;
        this.next = null;
    }

    setter(nodeValue) {
        this.value = nodeValue;
    }
}

function printList(head) {
    console.log(head.value);
    if (head.next === null) {
        return '';
    }
    printList(head.next);
}


let head = new Node();
head.setter(10);
head.next = new Node();
head.next.setter(20);
head.next.next = new Node();
head.next.next.setter(30);
head.next.next.next = new Node();
head.next.next.next.setter(40);
printList(head);