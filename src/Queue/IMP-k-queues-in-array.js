class KQueue {
  constructor(n, k) {
    this.n = n;
    this.k = k;
    this.front = new Array(k).fill(-1);
    this.rear = new Array(k).fill(-1);
    this.next = new Array(n);

    //To keep track of next free slots
    for (let index = 0; index < this.next.length; index++) {
      this.next[index] = index + 1;
    }
    this.next[n - 1] = -1;
    this.arr = new Array(n);
    this.freeSpot = 0;
  }
  enque(data, qn) {
    //check if overflow
    if (this.freeSpot === -1) {
      console.log("Queue is full");
      return;
    }

    //find first free index
    let index = this.freeSpot;

    //update freeSpot
    this.freeSpot = this.next[index];

    //if first element
    if (this.front[qn - 1] === -1) {
      this.front[qn - 1] = index;
    } else {
      //link new element to n-queue
      this.next[this.rear[qn - 1]] = index;
    }

    //update
    this.next[index] = -1;

    //update rear
    this.rear[qn - 1] = index;

    //push element
    this.arr[index] = data;
  }
  pop(qn) {
    //check underflow
    if (this.front[qn - 1] === -1) {
      console.log("Queue underflow");
      return -1;
    }
    //find the index to pop
    let index = this.front[qn - 1];

    //move front forward
    this.front[qn - 1] = this.next[index];

    //free slot managment

    //1. Make the next to link to next free spot
    this.next[index] = this.freeSpot;

    //2. Make the free spot as current  index which is now empty
    this.freeSpot = index;
    return this.arr[index];
  }
}

let kQueue = new KQueue(10, 3);
kQueue.enque(10, 1);
kQueue.enque(15, 1);
kQueue.enque(20, 2);
kQueue.enque(20, 1);

console.log(kQueue.pop(1));
console.log(kQueue.pop(2));
console.log(kQueue.pop(1));
console.log(kQueue.pop(1));
console.log(kQueue.pop(1));
