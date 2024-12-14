const { printList } = require('./utils')

class Node {
    constructor(val) {
        this.next = null;
        this.value = val;
    }
}

function lengthOfLinkedList(head) {
    let len = 0;
    let curr = head;
    while (curr != null) {
        curr = curr.next;
        len++;
    }
    return len;
}

function swapKthNodeFromEnd(head, k) {
    let length = lengthOfLinkedList(head);


    let prevPx = null, px = head;
    let prevPy = null, py = head;

    // Find the k-th node from the beginning (px) and its previous node (prevPx)
    for (let i = 1; i < k; i++) {
        prevPx = px;
        px = px.next;
    }

    // Find the k-th node from the end (py) and its previous node (prevPy)
    for (let i = 1; i < length - k + 1; i++) {
        prevPy = py;
        py = py.next;
    }

    // If previous nodes exist, adjust their next pointers
    if (prevPx) {
        prevPx.next = py;
    }
    if (prevPy) {
        prevPy.next = px;
    }

    // Swap the next pointers of px and py
    let temp = px.next;
    px.next = py.next;
    py.next = temp;

    // If one of the nodes is the head, adjust the head pointer
    if (k === 1) {
        head = py;
    }
    if (k === length) {
        head = px;
    }
    // let firstPrev = null;
    // let secPrev = null;
    // let firstPos = head;
    // let secPos = head;
    // while (length - k) {
    //     secPrev = secPos;
    //     secPos = secPos.next;
    //     length--;
    // }
    // while (k - 1) {
    //     firstPrev = firstPos;
    //     firstPos = firstPos.next;
    //     k--;
    // }
    // if (firstPos === secPos) {
    //     return head;
    // }
    // if (secPrev != null) {
    //     secPrev.next = firstPos;
    // }

    // if (firstPrev != null) {
    //     firstPrev.next = secPos;
    // }
    // let temp = firstPos.next;
    // firstPos.next = secPos.next;
    // secPos.next = temp;

    // if (tempK === 1) {
    //     head = secPos;
    // }
    // if (tempLen === k) {
    //     head = firstPos;
    // }
    return head;

}


let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
console.log(printList(head));
head = swapKthNodeFromEnd(head, 1);
console.log(printList(head));
