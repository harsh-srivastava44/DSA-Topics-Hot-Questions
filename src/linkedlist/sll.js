export class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }
  add(element) {
    // creates a new node
    let node = new Node(element);

    // to store current node
    let current;

    // if list is Empty add the
    // element and make it head
    if (this.head == null) this.head = node;
    else {
      current = this.head;

      // iterate to the end of the
      // list
      while (current.next) {
        current = current.next;
      }

      // add node
      current.next = node;
      this.tail = node;
    }
    this.size++;
  }
  insertAt(element, index) {
    // creates a new node
    let node = new Node(element);
    let current, previous;
    current = this.head;
    if (index < 0 || index > this.size)
      return console.log("Please enter a valid index.");
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let it = 0;
      while (it < index) {
        it++;
        previous = current;
        current = current.next;
      }
      previous.next = node;
      node.next = current;
    }
    this.size++;
  }
  removeFrom(index) {
    if (index < 0 || index > this.size)
      return console.log("Enter valid index ");
    let prev, current;
    current = this.head;
    if (index === 0) {
      prev = current;
      this.head = current.next;
    } else {
      let it = 0;
      while (it < index) {
        it++;
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
    this.size--;
    return current.element;
  }
  remove(element) {
    let current = this.head;
    let previous = null;
    while (current !== null) {
      if (current.element === element) {
        if (previous === null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        this.size--;
        return current.element;
      }
      previous = current;
      current = current.next;
    }
    return -1;
  }
  print() {
    let list = [];
    let temp = this.head;
    while (temp) {
      list.push(temp.element);
      temp = temp.next;
    }
    return list;
  }
  reverse() {
    if (!this.head || this.head.next === null) return this.head;
    let current = this.head;
    let prev = null;
    while (current) {
      let temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }
    this.head = prev;
  }
}
