class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class CircularLinkedList {
  constructor() {
    this.size = 0;
    this.tail = null;
  }
  insertNode(data) {
    let node = new Node(data);
    //empty list
    if (this.tail === null) {
      this.tail = node;
      this.tail.next = node;
    } else {
      let current = this.tail;
      node.next = current.next;
      current.next = node;
      this.tail = node;
    }
    this.size++;
  }
  print(msg = "") {
    let list = [];
    let current = this.tail;
    do {
      list.push(current.next.data);
      current = current.next;
    } while (current !== this.tail);
    console.log(`${msg} : ${list}`);
  }
  deleteNode(num) {
    let current = this.tail;
    let prev = null;
    while (current && current.data !== num) {
      prev = current;
      current = current.next;
    }
    if (current.data === num) {
      prev.next = current.next;
      current.next = null;
      this.size--;
    }
  }
}

let cll = new CircularLinkedList();
cll.insertNode(10);
cll.insertNode(20);
cll.insertNode(30);
console.log(cll.size);
cll.print("before delete");
cll.deleteNode(10);
cll.print("after delete");
