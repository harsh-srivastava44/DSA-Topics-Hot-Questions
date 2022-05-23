import Sll from "./sll";

let sll = new Sll();
sll.add(11);
sll.add(5);
sll.add(77);
sll.add(23);

console.log(sll.print());
sll.head = reverseKgroup(sll.head, 2);
console.log("<<<<<<=====>>>>>>>>>");
console.log(sll.print());

function reverseKgroup(head, k) {
  if (head === null) return null;
  let next = null;
  let current = head;
  let prev = null;
  let count = 0;
  while (count < k && current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    count++;
  }
  head.next = reverseKgroup(next, k);
  return prev;
}
//TC : O(n)
//SC : O(n)
