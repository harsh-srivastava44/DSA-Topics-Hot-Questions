import SingleLinkedList from "./sll";
let sll1 = new SingleLinkedList();
sll1.add(1);
sll1.add(3);
sll1.add(5);

let sll2 = new SingleLinkedList();
sll2.add(2);
sll2.add(4);
sll2.add(5);

function solve(head1, head2) {
  let curr2 = head2;

  let curr1 = head1;
  let next1 = head1.next;
  let next2 = head2;
  while (next1 !== null && curr2 !== null) {
    if (curr2.element >= curr1.element && curr2.element <= next1.element) {
      //add node
      curr1.next = curr2;
      next2 = curr2.next;
      curr2.next = next1;
      //update pointers
      curr1 = curr2;
      curr2 = next2;
    } else {
      curr1 = next1;
      next1 = next1.next;
      if (next1 == null) {
        curr1.next = curr2;
        return head1;
      }
    }
  }
  return head1;
}

function mergeSorted(head1, head2) {
  if (head1.element <= head2.element) {
    return solve(head1, head2);
  } else return solve(head2, head1);
}

let head = mergeSorted(sll2.head, sll1.head);

console.log(sll1.print.call({ head }));
