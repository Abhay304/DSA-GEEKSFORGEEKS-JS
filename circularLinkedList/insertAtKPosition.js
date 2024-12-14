class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
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

function insertAtKPosition(head, pos, data) {
    let temp = new Node(data);

    // If the list is empty
    if (head === null) {
        temp.next = temp; // Circular link to itself
        return temp;
    }

    // Inserting at position 1 (new head)
    if (pos === 1) {
        temp.next = head.next; // Point the new node to the next of the head
        head.next = temp; // Point head to the new node
        return head;
    }

    let curr = head;
    let count = 1;

    // Traverse the list to find the correct position
    while (curr.next !== head && count < pos - 1) {
        curr = curr.next;
        count++;
    }

    if (count < pos) {
        return head;
    }

    // If we have traversed the whole list and haven't found the position, 
    // we insert at the end (last position before the head)
    if (count === pos - 1 || curr.next === head) {
        temp.next = curr.next;  // Point the new node to the next node (which is head if at the end)
        curr.next = temp; // Insert the node by changing the current node's next pointer
    }

    return head;
}




let head = new Node(12);
head.next = new Node(25);
head.next.next = head
// head.next.next = new Node(30);
// head.next.next.next = new Node(40);
// head.next.next.next.next = new Node(50);
// head.next.next.next.next.next = head;
console.log(printlist(head))
head = insertAtKPosition(head, 6, 16);
console.log(printlist(head));