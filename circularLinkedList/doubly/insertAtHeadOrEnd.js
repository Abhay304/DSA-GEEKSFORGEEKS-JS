class Node {
    constructor() {
        this.data;
        this.next = null;
        this.prev = null;
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

function insertAtHead(head, x) {
    let temp = new Node();
    temp.setter(x);
    if (head === null) {
        temp.next = temp;
        temp.prev = temp;
        return temp;
    }
    temp.prev = head.prev;
    temp.next = head;
    head.prev.next = temp;
    head.prev = temp;
    return temp;
    // return head if you want to insert at End reset code will be same.
}

let head = new Node();
head.setter(10);
let temp1 = new Node();
temp1.setter(20);
let temp2 = new Node();
temp2.setter(30);
let temp3 = new Node();
temp3.setter(40);
head.next = temp1;
temp1.prev = head;
temp1.next = temp2;
temp2.prev = temp1;
temp2.next = temp3;
temp3.prev = temp2;
temp3.next = head;
head.prev = temp3;
head = insertAtHead(head, 3);
console.log(printlist(head));