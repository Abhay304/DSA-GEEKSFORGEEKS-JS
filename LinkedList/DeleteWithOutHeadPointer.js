// #IMP

const { printList } = require('./utils')

class Node {
    constructor(val) {
        this.next = null;
        this.value = val;
    }
}

function findNode(head, searchFor) {
    let curr = head;
    while (curr !== null) {
        if (curr.value == searchFor) {
            return curr;
        }
        curr = curr.next;
    }
    return null;
}


function deleteWithOutHeadPointer(node) {
    if (node === null) {
        return null;
    }
    node.value = node.next.value; // 10 20 40 40 50 60 //overriding same value of from next
    node.next = node.next.next; // 10 20 40 50 60 , 
}


let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
head.next.next.next.next.next = new Node(60);
console.log(printList(head));
let deleteNode = findNode(head, 30);
deleteWithOutHeadPointer(deleteNode);
console.log(printList(head));