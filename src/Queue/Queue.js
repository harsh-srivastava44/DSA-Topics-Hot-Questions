export default class Queue {
  #items;
  constructor() {
    this.#items = [];
    this.qfront = 0;
    this.rear = 0;
  }
  enque(num) {
    this.#items.push(num);
  }
  deque() {
    if (this.isEmpty()) return "Underflow";
    return this.#items.shift();
  }
  front() {
    if (this.isEmpty()) return "No elements in Queue";
    return this.#items[0];
  }
  isEmpty() {
    return this.#items.length === 0;
  }
  size() {
    return this.#items.length;
  }
  printQueue() {
    let str = "";
    for (let i = 0; i < this.#items.length; i++) str += this.items[i] + " ";
    return str;
  }
  data() {
    return this.#items;
  }
}

// let queue = new Queue();
// queue.enque(5);
// queue.enque(10);
// console.log(queue.size);
