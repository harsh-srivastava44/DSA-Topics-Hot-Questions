/**
 * Question : Find middle element of stack
 * Link : https://www.geeksforgeeks.org/design-a-stack-with-find-middle-operation/
 */

import Stack from "./stack";
import Deque from "../Queue/Dequeue";
class MyStack {
  constructor() {
    this.stack = new Stack();
    this.deque = new Deque();
  }
  push(n) {
    if (this.deque.getSize() - this.stack.getSize() === 1) {
      this.stack.push(this.deque.popFront());
      this.deque.pushRear(n);
    } else {
      this.deque.pushRear(n);
    }
  }
  pop() {
    this.deque.popBack();
    if (this.stack.getSize() - this.deque.getSize() > 0) {
      this.deque.pushFront(this.stack.pop());
    }
  }
  middle() {
    return this.deque.getFront();
  }
}

let stack = new MyStack();
stack.push(2);
stack.push(5);
stack.push(3);
stack.push(7);
stack.push(4);

console.log(stack.middle());
