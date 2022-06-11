export default class Nqueue {
  constructor(n) {
    this.arr = new Array(n);
    this.top = new Array(n).fill(-1);
    this.freeSpot = 0;
    this.next = new Array(n);
    for (let i = 0; i < n; i++) {
      this.next[i] = i + 1;
    }
    this.next[n - 1] = -1;
  }
  push(nq, x) {
    let index = this.freeSpot;
    this.freeSpot = this.next[index];
    this.arr[index] = x;

    /**
     * if arr[i ] is empty so next[i ] show next free spot
     * if arr[i] is not empty ,so next[i] shows next element after stack top
     */
    this.next[index] = this.top[nq - 1];
    this.top[nq - 1] = index;
  }
  pop(nq) {
    //check if stack is empty
    if (this.top[nq - 1] === -1) {
      return -1;
    }
    let index = this.top[nq - 1];
    this.top[nq - 1] = this.next[index];
    this.next[index] = this.freeSpot;
    this.freeSpot = index;
  }
}
