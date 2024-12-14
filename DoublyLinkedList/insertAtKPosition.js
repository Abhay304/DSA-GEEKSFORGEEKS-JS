
class Node {
    constructor(val) {
        this.value = val;
        this.prev = null;
        this.next = null;
    }
}


function insertAtKPosition(head, val, k) {
    let node = new Node(val);
    if (head === null) {
        return node;
    }
    let curr = head;

    for (let i = 0; i < k; i++) {
        curr = curr.next;
    }
    let temp = curr.next;
    if (temp) {
        node.next = temp;
        temp.prev = node;
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
head = insertAtKPosition(head, 50, 0);
console.log(printlist(head));



