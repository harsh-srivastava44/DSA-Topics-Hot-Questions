import SingleLinkedList from "./sll";

let sll = new SingleLinkedList();
sll.add(1);
sll.add(2);
sll.add(3);
sll.add(4);

console.log(sll.size);
console.log(sll.print());
sll.reverse();
console.log(sll.print());
