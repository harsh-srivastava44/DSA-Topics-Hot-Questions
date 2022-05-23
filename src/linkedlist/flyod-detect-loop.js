import SingleLinkedList from "./sll";

let sll = new SingleLinkedList();
sll.add(1);
sll.add(2);
sll.add(3);
sll.add(4);

//creating loop
sll.tail.next = sll.head.next;

//Floyd Loop detection algorithm
let { isLoop: isValidCyclic } = floydDetectLoop(sll.head);
console.log("isCyclic :", isValidCyclic);

/** getstarting node of loop --- >  
(Eg in this case loop starts at2)
*/
console.log("Starting Node:", getStartingNode(sll.head));

//Break the loop
removeLoop(sll.head);

//  Check again if loop is broken, if yes, return false
let { isLoop } = floydDetectLoop(sll.head);
console.log("isCyclic :", isLoop);

function floydDetectLoop(head) {
  let slow = head,
    fast = head;
  while (slow !== null && fast !== null) {
    fast = fast.next;
    if (fast !== null) fast = fast.next;
    if (slow !== null) slow = slow.next;

    if (slow === fast) return { isLoop: true, node: slow };
  }
  return { isLoop: false, node: slow };
}

function getStartingNode(head) {
  let slow = head;
  let { node: intersection } = floydDetectLoop(head);
  while (slow !== intersection) {
    slow = slow.next;
    intersection = intersection.next;
  }
  return slow;
}

function removeLoop(head) {
  if (head === null) return;
  let startingNode = getStartingNode(head);
  let temp = startingNode.next;
  while (startingNode !== temp.next) {
    temp = temp.next;
  }
  temp.next = null;
}
