import Stack from "./stack";

class OptimizedStack {
  constructor() {
    this.stack = new Stack();
    this.min = null;
  }
  push(x) {
    if (this.stack.isEmpty()) {
      this.min = x;
      this.stack.push(x);
    } else if (x < this.min) {
      this.stack.push(2 * x - this.min);
      this.min = x;
    } else {
      this.stack.push(x);
    }
  }
  pop() {
    if (this.stack.peak() > this.min) {
      this.stack.pop();
    } else {
      this.min = 2 * this.min - this.stack.peak();

      return (this.min + this.stack.pop()) / 2;
    }
  }
}
//[3,4,6,1]

/**
 * min    current stack
 * push 3   3      3
 * push 3   4      3,4
 * push 3   6      3,4,6
 * push 1   1      3,4,6,-1
 * pop
 */

let stack = new OptimizedStack();
stack.push(3);
stack.push(4);
stack.push(6);
stack.push(1);
stack.pop();
