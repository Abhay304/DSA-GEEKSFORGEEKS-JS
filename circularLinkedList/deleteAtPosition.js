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

function deleteHead(head) {
    if (head === null) return null;
    if (head.next === head) {
        return null;
    }
    head.data = head.next.data;
    let temp = head.next;
    head.next = head.next.next;
    return head;
}


function deleteAtPosition(head, pos) {
    if (head === null) {
        return null;
    }
    if (pos === 1) {
        return deleteHead(head);
    }
    let curr = head;
    for (let i = 0; i < pos - 2; i++) {
        curr = curr.next;
        if (curr === head) {
            return head;
        }
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
deleteAtPosition(head, 3);
console.log(printlist(head));