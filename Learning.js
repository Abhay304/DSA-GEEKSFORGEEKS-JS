function modifyNode(node) {
    node.value = 10;  // Modify the property of the object that node is referencing
    node = { value: 20 };  // Reassign node to a new object
    console.log("Inside function:", node);  // Shows the new object (value: 20)
}

let myNode = { value: 5 };
console.log("Before function call:", myNode);  // Shows the original object (value: 5)

modifyNode(myNode);

console.log("After function call:", myNode);  // Shows the original object (value: 10)
