let head = null; // head of list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function push(new_data) {
  let new_node = new Node(new_data);
  new_node.next = head;
  head = new_node;
}
push(15);
push(10);
push(5);
push(20);
push(3);
push(2);

function mergeSort(head) {
  //base case
  if (head === null || head.next === null) return head;

  //break ll in 2 half , after finding mide
  let mid = findMid(head);
  let nextOfMiddle = mid.next;
  mid.next = null;

  let left = mergeSort(head);
  let right = mergeSort(nextOfMiddle);

  let sortedList = merge(left, right);
  return sortedList;
}

function findMid(listHead) {
  if (head == null) return head;
  let slow = listHead,
    fast = listHead;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function merge(left, right) {
  let result = null;
  /* Base cases */
  if (left == null) return right;
  if (right == null) return left;

  /* Pick either a or b, and recur */
  if (left.data <= right.data) {
    result = left;
    result.next = merge(left.next, right);
  } else {
    result = right;
    result.next = merge(left, right.next);
  }
  return result;
}

console.log(mergeSort(head));
