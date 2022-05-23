import SingleLinkedList, { Node } from "./sll";
let sll1 = new SingleLinkedList();
sll1.add(3);
sll1.add(4);
sll1.add(5);

let sll2 = new SingleLinkedList();
sll2.add(4);
sll2.add(5);

function reverse(head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
}

function getNumber(head) {
  let temp = head;
  head = reverse(temp);
  temp = head;

  let total = 0;
  let i = 0;
  while (temp) {
    total = total + Math.pow(10, i) * temp.element;
    temp = temp.next;
    i++;
  }
  return total;
}

function addTwoNumber(head1, head2) {
  let num1 = getNumber(head1);
  let num2 = getNumber(head2);
  let result = num1 + num2;
  let nums = String(result)
    .split("")
    .map((item) => Number(item));

  let curr = null;
  let head = null;
  while (nums.length !== 0) {
    let num = nums.shift();
    if (head == null) {
      curr = new Node(num);
      head = curr;
    } else {
      let node = new Node(num);
      curr.next = node;
      curr = node;
    }
  }
  return head;
}

console.log(addTwoNumber(sll1.head, sll2.head));
