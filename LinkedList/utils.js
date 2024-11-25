const printList = (head) => {
    let curr = head;
    let string = "";

    while (curr != null) {
        string += (curr.value || curr.data) + " ";
        curr = curr.next;
    }

    return string;
}
module.exports = {
    printList
};