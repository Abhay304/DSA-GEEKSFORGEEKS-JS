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



function insertAtHeadCircularLinkedList(head, data) {
    let temp = new Node(data);
    temp.setter(data); // Set value of the new node
    if (head === null) {
        temp.next = temp;
        return temp;
    }
    temp.next = head.next;
    head.next = temp;
    [head.data, temp.data] = [temp.data, head.data];
    return head;
    // return temp; //if you want to insert at end same code 
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
console.log(printlist(head));
head = insertAtHeadCircularLinkedList(head, 12);
console.log(printlist(head));