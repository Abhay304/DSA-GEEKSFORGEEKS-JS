class Node {
    constructor() {
        this.data = null;
        this.next = null;
    }

    setter(x) {
        this.data = x;
    }
}

function printlist(head) {
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


function deleteFirstNode(head) {
    if (head === null) {
        return null;
    }
    return head.next;
}



let head = new Node();
head.setter(10);
head.next = new Node();
head.next.setter(20);
head.next.next = new Node();
head.next.next.setter(30);
console.log(printlist(head));
head = deleteFirstNode(head);
console.log(printlist(head));
