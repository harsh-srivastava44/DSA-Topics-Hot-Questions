// Javascript program to remove duplicates from a sorted linked list

/* Linked list Node*/
class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}

let head = new Node(); // head of list

//Approach 1
// function removeDuplicates() {
//   /*Another reference to head*/
//   let curr = head;

//   /* Traverse list till the last node */
//   while (curr != null) {
//     let temp = curr;
//     /*Compare current node with the next node and
// 			keep on deleting them until it matches the current
// 			node data */
//     while (temp != null && temp.data == curr.data) {
//       temp = temp.next;
//     }
//     /*Set current node next to the next different
// 			element denoted by temp*/
//     curr.next = temp;
//     curr = curr.next;
//   }
// }

//Approach 2
function removeRepeated() {
  let current = head;
  while (current && current.next) {
    if (current.data === current.next.data) {
      current.next = current.next.next;
    } else current = current.next;
  }
}

/* Utility functions */

/* Inserts a new Node at front of the list. */
function push(new_data) {
  /* 1 & 2: Allocate the Node &
				Put in the data*/
  let new_node = new Node(new_data);

  /* 3. Make next of new Node as head */
  new_node.next = head;

  /* 4. Move the head to point to new Node */
  head = new_node;
}

/* Function to print linked list */
function printList() {
  let temp = head;
  while (temp != null && temp.data) {
    document.write(temp.data + " ");
    temp = temp.next;
  }
  document.write("<br>");
}

/* Driver program to test above functions */
push(20);
push(13);
push(13);
push(11);
push(11);
push(11);

document.write("List before removal of duplicates ");
printList();

removeRepeated();

document.write("List after removal of elements ");
printList();
