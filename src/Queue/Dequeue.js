export default class Deque {
  #arr;
  constructor(n = 10001) {
    this.#arr = [];
  }
  pushFront(n) {
    this.#arr.unshift(n);
  }

  pushRear(n) {
    this.#arr.push(n);
  }

  popFront() {
    this.#arr.shift();
  }
  popBack() {
    return this.#arr.length > 0 ? this.#arr.pop() : null;
  }

  getFront() {
    return this.#arr[0];
  }
  getRear() {
    return this.#arr[this.#arr.length - 1];
  }
  isEmpty() {
    return this.#arr.length === 0;
  }
  getSize() {
    return this.#arr.length;
  }
}
