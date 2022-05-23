export default class Stack {
  #arr;
  constructor(size) {
    this.size = size;
    this.top = -1;
    this.#arr = [];
  }
  push(element) {
    if (this.size - this.top > 1) {
      this.top++;
      this.#arr[this.top] = element;
    } else {
      console.log("Stack Overflow");
    }
  }
  pop() {
    if (this.top >= 0) {
      this.top--;
      return this.#arr.pop();
    } else {
      // console.log("Stack is empty");
    }
  }
  peak() {
    if (this.top >= 0 && this.top < this.size) {
      return this.#arr[this.top];
    } else {
      console.log("stack is empty");
    }
  }
  isEmpty() {
    return this.top === -1 ? true : false;
  }
}
