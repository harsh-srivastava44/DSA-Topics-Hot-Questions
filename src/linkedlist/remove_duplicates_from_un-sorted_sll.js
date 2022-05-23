class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

//Approach 1
// function removeDuplicates(head) {
//   let hs = new Set();
//   let current = head;
//   let prev = null;
//   while (current !== null) {
//     if (hs.has(current.element)) {
//       prev.next = current.next;
//     } else {
//       hs.add(current.element);
//       prev = current;
//     }
//     current = current.next;
//   }
// }

//Approach 2 :  T.C = O(n*n) S.C = O(1 )
function removeDuplicates(head) {
  let current = head;
  while (current !== null) {
    let prev = current;
    let temp = prev.next;
    while (temp !== null) {
      if (temp.element === current.element) {
        prev.next = temp.next;
        temp = prev.next;
      } else {
        prev = temp;
        temp = temp.next;
      }
    }
    current = current.next;
  }
}
function printList(head) {
  let list = [];
  while (head !== null) {
    list.push(head.element);
    head = head.next;
  }
  return list;
}

let start = new Node(10);
start.next = new Node(12);
start.next.next = new Node(11);
start.next.next.next = new Node(11);
start.next.next.next.next = new Node(12);
start.next.next.next.next.next = new Node(11);
start.next.next.next.next.next.next = new Node(10);

console.log("Before Removal :");
console.log(printList(start));

console.log("After Removal :");
removeDuplicates(start);
console.log(printList(start));
