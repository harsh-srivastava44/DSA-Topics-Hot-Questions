import Cll from "./cll";

let circularLL = new Cll();
circularLL.insertNode(1);
circularLL.insertNode(21);
circularLL.insertNode(32);
circularLL.insertNode(12);
circularLL.print();
let head = circularLL.tail.next;

function checkIfCircular(head) {
  if (head === null) return false;
  let temp = head.next;
  if (head.next != null && head.next === head) return true;
  else if (head.next === null) return false;
  else {
    while (temp.next !== null && temp !== head) {
      temp = temp.next;
    }
    if (temp === head) return true;
    return false;
  }
}

console.log(checkIfCircular(head));
