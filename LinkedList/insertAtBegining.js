class Node {
    constructor() {
        this.data;
        this.next;
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


function insertBegin(head, x) {
    let temp = new Node();
    temp.setter(x);
    temp.next = head;
    return temp;
}



let head = null;
head = insertBegin(head, 30);
head = insertBegin(head, 20);
head = insertBegin(head, 10);
console.log(printlist(head));