import SingleLinkedList from "./sll";
import { Node } from "./sll";
let sll = new SingleLinkedList();
sll.add(1);
sll.add(0);
sll.add(2);
sll.add(1);
sll.add(2);

function insertAtTail(tail, current) {
  tail.next = current;
  tail = current;
}

function sortLinkList(head) {
  let zeroHead = new Node(-1);
  let zeroTail = zeroHead;
  let oneHead = new Node(-1);
  let oneTail = oneHead;
  let twoHead = new Node(-1);
  let twoTail = twoHead;

  let current = head;

  //implement seperate list for 0,1,2
  while (current !== null) {
    let value = current.element;
    if (value === 0) {
      insertAtTail(zeroTail, current);
    } else if (value === 1) {
      insertAtTail(oneTail, current);
    } else {
      insertAtTail(twoTail, current);
    }

    current = current.next;
  }

  //merging all 3 lists
  zeroTail.next = oneHead.next;
  oneTail.next = twoHead.next;
  twoTail.next = null;

  //assign new head
  return zeroHead.next;
  //delete dummy nodes
}
let head = sortLinkList(sll.head);
console.log(head);
