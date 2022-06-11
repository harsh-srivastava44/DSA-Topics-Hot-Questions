/**
 * Quesution : https://www.geeksforgeeks.org/interleave-first-half-queue-second-half-2/
 * Interleave 1st half of queue
 */
import Queue from "./Queue";

let queue = new Queue();
queue.enque(11);
queue.enque(12);
queue.enque(13);
queue.enque(14);
queue.enque(15);
queue.enque(16);
queue.enque(17);
queue.enque(18);

function Solve(data = new Queue(), n) {
  let newQueue = new Queue();
  let i = 0;
  while (i < Math.floor(n / 2)) {
    newQueue.enque(data.deque());
    i++;
  }
  while (!newQueue.isEmpty()) {
    data.enque(newQueue.deque());
    let value = data.deque();
    data.enque(value);
  }
  return data.data();
}

console.log(Solve(queue, queue.size()));
