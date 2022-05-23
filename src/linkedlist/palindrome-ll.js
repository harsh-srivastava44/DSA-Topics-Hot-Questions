import SingleLinkedList from "./sll";
let sll1 = new SingleLinkedList();
sll1.add(1);
sll1.add(2);
sll1.add(2);
sll1.add(1);

/**
 *
 * Sc : O(n)
 */
function isPalindrome(head) {
  let curr = head;
  let listItems = [];
  while (curr !== null) {
    listItems.push(curr.element);
    curr = curr.next;
  }

  let i = 0;
  let j = listItems.length - 1;
  while (i <= j) {
    if (listItems[i] !== listItems[j]) return false;
    i++;
    j--;
  }
  return true;
}

/**
 * ------------------Approach 2 -------
 * Sc : O(1)
 */
function getMid(head) {
  let slow = head;
  let fast = head.next;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
function reverse(head) {
  let curr = head;
  let prev = null;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
}

function isPalin(start) {
  if (start === null || start.next === null) return true;
  let mid = getMid(start);
  let temp = mid.next;
  mid.next = reverse(temp);

  //compare both halfs
  let head1 = start;
  let head2 = mid.next;
  while (head2) {
    if (head1.element !== head2.element) return false;
    head1 = head1.next;
    head2 = head2.next;
  }
  return true;
}

console.log(isPalin(sll1.head));
