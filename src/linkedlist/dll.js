class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
export default class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }
  print() {
    let temp = this.head;

    let list = [];
    while (temp !== null) {
      list.push(temp.data);
      temp = temp.next;
    }
    console.log("list data: ", list);
  }
  printReverse() {
    let temp = this.tail;
    let list = [];
    while (temp) {
      list.push(temp.data);
      temp = temp.prev;
    }
    console.log("reverse list", list);
  }

  getLength() {
    let temp = this.head;
    let count = 0;
    while (temp !== null) {
      count++;
      temp = temp.next;
    }
    return count;
  }
  insertAtHead(data) {
    let new_Node = new Node(data);
    if (!this.head) {
      this.head = new_Node;
      this.tail = new_Node;
    } else {
      let temp = this.head;
      new_Node.next = temp;
      temp.prev = new_Node;
      this.head = new_Node;
    }
  }
  insert(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }
  insertAtPosition(data, poistion) {
    let newNode = new Node(data);
    let prev = null;
    let current = this.head;
    let count = 0;
    if (poistion === 0) this.insertAtHead(data);
    else if (poistion === this.size - 1) this.insert(data);
    else {
      while (count < poistion && current.next) {
        prev = current;
        current = current.next;
        count++;
      }
      prev.next = newNode;
      newNode.next = current;
      this.size++;
    }
  }
  reverseList() {
    let current = this.head;
    let prev = null;
    this.tail = current;
    while (current) {
      let temp = current.next;
      current.next = prev;
      current.prev = temp;
      prev = current;
      current = temp;
    }
    this.head = prev;
  }
}
function main() {
  let dll = new DoubleLinkedList();
  dll.insertAtHead(10);
  dll.insertAtHead(20);
  dll.insertAtHead(30);
  console.log("before insert");
  dll.print();
  dll.insert(40);
  dll.print();
  dll.printReverse();
  dll.insertAtPosition(70, 2);
  dll.print();
}
main();
