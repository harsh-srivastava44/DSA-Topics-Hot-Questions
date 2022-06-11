class CircularQueue {
  constructor() {
    this.front = -1;
    this.rear = -1;
    this.size = 10001;
    this.arr = new Array(this.size);
  }
  enque(value) {
    //If array is full
    if (
      (this.front === 0 && this.rear === this.size - 1) ||
      this.rear === (this.front - 1) % (this.size - 1)
    ) {
      console.log("Queue is full");
      return false;
    }
    //1st element to push
    else if (this.front === -1) {
      this.front = this.rear = 0;
    } else if (this.rear === this.size - 1 && this.front !== 0) {
      this.rear = 0; // to maintain cyclic nature
    } else {
      this.rear++;
    }
    this.arr[this.rear] = value;
    return true;
  }
  deque() {
    //If queue is empty
    if (this.front === -1) return false;

    //If single element
    let ans = this.arr[this.front];
    this.arr[this.front] = -1;
    if (this.front === this.rear) {
      this.arr.pop();
      this.front = this.rear = -1;
    }
    // to maintain cyclic nature
    else if (this.front === this.size - 1) {
      this.front = 0;
    } else {
      this.front++;
    }
    return ans;
  }
}
