/**
 * Question : https://www.geeksforgeeks.org/reversing-first-k-elements-queue/
 */
import Queue from "./Queue";
import Stack from "../stacks/stack";

let queue = new Queue(5);
queue.enque(1);
queue.enque(2);
queue.enque(3);
queue.enque(4);
queue.enque(5);
function modifyQueue(queue, k) {
  let stack = new Stack(queue.size());
  for (let index = 0; index < k; index++) {
    stack.push(queue.deque());
  }
  while (stack.top !== -1) {
    queue.enque(stack.pop());
  }
  let t = queue.size() - k;
  while (t--) {
    let elem = queue.deque();
    queue.enque(elem);
  }
  return queue.items;
}

console.log(modifyQueue(queue, 3));
