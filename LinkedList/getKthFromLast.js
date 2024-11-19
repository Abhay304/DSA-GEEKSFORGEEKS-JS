class Node {
    constructor() {
        this.value;
        this.next = null;
    }

    setter(nodeValue) {
        this.value = nodeValue;
    }
}

const printList = (head) => {
    let curr = head;
    let string = "";

    while (curr != null) {
        string += curr.value + " ";
        curr = curr.next;
    }

    return string;
}


function getCount(head) {
    let curr = head;
    let count = 0;
    while (curr != null) {
        count++;
        curr = curr.next;
    }

    return count;
}

// BrtueForce
function getKthFromLast(head, k) {
    let count = getCount(head);
    let traverseCount = count - k;
    let temp = head;
    if (traverseCount < 0) {
        return -1;
    }
    while (traverseCount) {
        temp = temp.next;
        traverseCount--;
    }
    return temp.value;
}

//TwoPointer
function getKthFromLast1(head, k) {
    let currfirst = head;
    let currSecond = head;

    while (k) {
        if (currfirst === null) {
            return -1;
        }
        currfirst = currfirst.next;
        k--;
    }

    while (currfirst !== null) {
        currfirst = currfirst.next;
        currSecond = currSecond.next;
    }

    if (currSecond !== null) {
        return currSecond.value
    } else {
        return -1;
    }
}

let head = new Node();
head.setter(10);
head.next = new Node();
head.next.setter(20);
head.next.next = new Node();
head.next.next.setter(30);
head.next.next.next = new Node();
head.next.next.next.setter(40);
console.log(printList(head));
console.log(getKthFromLast(head, 2));
console.log(getKthFromLast1(head, 2));