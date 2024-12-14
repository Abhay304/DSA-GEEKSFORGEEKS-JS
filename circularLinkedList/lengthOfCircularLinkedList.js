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



function getLength(head) {
    if (head === null) {
        return 0;
    }
    let count = 0;
    let curr = head;
    do {
        count++;
        curr = curr.next;
    } while (curr !== head);
    return count;
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
console.log(getLength(head))
console.log(printlist(head))