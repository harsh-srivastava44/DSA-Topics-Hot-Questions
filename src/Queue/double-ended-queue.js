class Deque {
  constructor(n) {
    this.arr = [];
    this.front = this.rear = -1;
    this.size = n;
  }
  pushFront(n) {
    //checkFull
    if (this.isFull()) {
      return false;
    }
    //if empty and insert 1st element
    else if (this.isEmpty()) {
      this.front = this.rear = 0;
    }
    //to maintain cyclic nature
    else if (this.front === 0 && this.rear !== this.size - 1) {
      this.front = this.size - 1;
    } else {
      this.front--;
    }
    this.arr[this.front] = n;
  }

  pushRear(n) {
    //checkFull
    if (this.isFull()) {
      return false;
    }
    //if empty and insert 1st element
    else if (this.isEmpty()) {
      this.front = this.rear = 0;
    }
    //to maintain cyclic nature
    else if (this.rear === this.size - 1 && this.front !== 0) {
      this.rear = 0;
    } else {
      this.rear++;
    }
    this.arr[this.rear] = n;
    return true;
  }

  popFront() {
    //to check if queue is empty
    if (this.isEmpty()) return false;
    let ans = this.arr[this.front];
    this.arr[this.front] = -1;
    if (this.front === this.rear) {
      this.front = this.rear = -1;
    }
    //to maintain cyclic nature
    if (this.front === this.size - 1) {
      this.front = 0;
    } else {
      this.front++;
    }
    return ans;
  }
  popBack() {
    if (this.isEmpty()) return false;
    let ans = this.arr[this.rear];
    //if single element
    if (this.front === this.rear) {
      this.arr[this.rear] = -1;
      this.rear = this.front = -1;
    }
    //to maintain cyclic nature
    else if (this.rear === 0) {
      this.rear = this.size - 1;
    } else {
      this.rear--;
    }
    return ans;
  }
  getFront() {
    if (this.isEmpty()) return -1;
    return this.arr[this.front];
  }
  getRear() {
    if (this.isEmpty()) return -1;
    return this.arr[this.rear];
  }
  isEmpty() {
    return this.arr?.length < 1 ? true : false;
  }
  isFull() {
    return (this.front === 0 && this.rear === this.size - 1) ||
      (this.front !== 0 && this.rear === (this.front - 1) % (this.size - 1))
      ? true
      : false;
  }
}
