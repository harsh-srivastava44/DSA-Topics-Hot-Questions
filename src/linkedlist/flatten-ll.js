let head = null; // head of list
class Node {
  constructor(val) {
    this.data = val;
    this.down = null;
    this.right = null;
  }
}

function push(head_ref, data) {
  /*
   * 1 & 2: Allocate the Node & Put in the data
   */
  var new_node = new Node(data);

  /* 3. Make next of new Node as head */
  new_node.down = head_ref;

  /* 4. Move the head to point to new Node */
  head_ref = new_node;

  /* 5. return to link it back */
  return head_ref;
}

head = push(head, 30);
head = push(head, 8);
head = push(head, 7);
head = push(head, 5);

head.right = push(head.right, 20);
head.right = push(head.right, 10);

head.right.right = push(head.right.right, 50);
head.right.right = push(head.right.right, 22);
head.right.right = push(head.right.right, 6);

head.right.right.right = push(head.right.right.right, 45);
head.right.right.right = push(head.right.right.right, 40);
head.right.right.right = push(head.right.right.right, 35);
head.right.right.right = push(head.right.right.right, 20);

// flatten the list
function flatten(head) {
  /**--------------------APPORACH-1-------*/
  // let flattened = null;
  // while (head != null) {
  //   flattened = merge(flattened, head);
  //   head = head.right;
  // }
  // return flattened;
  /** ----------------------------------- */

  if (head === null || head.right === null) return head;
  let down = head;
  let right = flatten(head.right);
  down.right = null;

  let ans = merge(down, right);
  return ans;
}

function merge(left, right) {
  let result = null;
  /* Base cases */
  if (left == null) return right;
  if (right == null) return left;

  /* Pick either a or b, and recur */
  if (left.data <= right.data) {
    result = left;
    result.down = merge(left.down, right);
  } else {
    result = right;
    result.down = merge(left, right.down);
  }
  return result;
}

console.log(flatten(head));
