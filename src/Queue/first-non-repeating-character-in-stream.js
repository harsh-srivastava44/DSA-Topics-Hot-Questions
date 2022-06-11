/**
 * Question : First non-repeating character in a stream
 * https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream1216/1
 */

import Queue from "./Queue";

function FirstNonRepeating(str = "") {
  let map = {};
  let queue = new Queue();
  let ans = "";

  str.split("").forEach((i) => {
    map[i] = (map[i] ?? 0) + 1;
    queue.enque(i);
    while (!queue.isEmpty()) {
      if (map[queue.front()] > 1) {
        queue.deque();
      } else {
        ans = ans + queue.front();
        break;
      }
    }
    if (queue.isEmpty()) ans += "#";
  });

  return ans;
}

console.log(FirstNonRepeating("aabc"));
