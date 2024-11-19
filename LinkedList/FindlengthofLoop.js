// Javascript program to count number of nodes
// in loop in a linked list if loop is present

class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

function getCount(head) {
    // it will count till head again
    let curr = head.next;
    let count = 1;
    while (curr != head) {
        count++;
        curr = curr.next;
    }

    return count;
}

function countNodesInLoop(head) {
    if (head.next === null) {
        return 0;
    }

    let visited = new Set();
    let curr = head;

    while (curr != null) {
        while (curr) {
            if (visited.has(curr)) {
                return getCount(curr)
            }
            visited.add(curr);
            curr = curr.next;
        }
    }
    return 0;
}

function countNodesInLoop1(head) {
    let slow = head;
    let fast = head;

    while (slow !== null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next

        if (slow === fast) {
            return getCount(slow);
        }
    }

    return 0;
}

//create linked list 1->2->3->4->5
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

//loop from 5 to 2
head.next.next.next.next.next = head.next;

console.log(countNodesInLoop(head));
console.log(countNodesInLoop1(head));
