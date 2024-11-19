class Node {
    constructor() {
        this.data = null;
        this.next = null;
    }

    setter(x) {
        this.data = x;
    }
}

function printlist() {
    let str = "";

    while (head != null) {
        str = str + head.data + " ";
        head = head.next;
    }

    return str;
}


function insertEnd(head, x) {
    let temp = new Node();
    temp.setter(x);

    if (head === null) return temp;  // If the list is empty, return the new node

    let curr = head;
    while (curr.next !== null) {
        curr = curr.next;  // Move to the last node
    }

    curr.next = temp;  // Link the new node at the end
    return head;  // Return the (possibly unchanged) head of the list
}



let head = null;
head = insertEnd(head, 30);
head = insertEnd(head, 20);
head = insertEnd(head, 10);
console.log(printlist(head));