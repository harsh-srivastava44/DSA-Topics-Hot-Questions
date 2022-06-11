import Deque from "./Dequeue";

function solve(arr, n, k) {
  let maxi = new Deque();
  let mini = new Deque();
  for (let i = 0; i <= k; i++) {
    while (!maxi.isEmpty() && arr[maxi.getRear()] <= arr[i]) {
      maxi.popBack();
    }
    while (!mini.isEmpty() && arr[mini.getRear()] >= arr[i]) {
      mini.popBack();
    }
    maxi.pushRear(i);
    mini.pushRear(i);
  }
  let ans = 0;
  ans += arr[mini.getFront()] + arr[maxi.getFront()];

  for (let i = k; i < n; i++) {
    //removal for window
    if (maxi.isEmpty() && i - maxi.getFront() >= k) {
      maxi.popFront();
    }
    if (maxi.isEmpty() && i - mini.getFront() >= k) {
      mini.popFront();
    }

    //addition
    while (!maxi.isEmpty() && arr[maxi.getRear()] <= arr[i]) {
      maxi.popBack();
    }
    while (!mini.isEmpty() && arr[mini.getRear()] >= arr[i]) {
      mini.popBack();
    }
    maxi.pushRear(i);
    mini.pushRear(i);

    ans += arr[mini.getFront()] + arr[maxi.getFront()];
  }
  return ans;
}
let arr = [2, 5, -1, 7, -3, -1, -2];
console.log(solve(arr, 7, 4));
