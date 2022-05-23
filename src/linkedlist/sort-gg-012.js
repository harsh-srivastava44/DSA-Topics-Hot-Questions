// Javascript program to sort a
// linked list of 0, 1 and 2
let head; // head of list

/* Linked list Node */
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function sortList() {
  // initialise count of 0 1 and 2 as 0
  var count = [0, 0, 0];

  var ptr = head;

  /*
		count total number of '0', '1' and '2'
		count[0] will store total number of
		'0's count[1] will store total number
		of '1's count[2] will store total
		number of '2's
		*/
  while (ptr != null) {
    count[ptr.data]++;
    ptr = ptr.next;
  }

  var i = 0;
  ptr = head;

  /*
		Let say count[0] = n1, count[1] = n2 and
		count[2] = n3 now start traversing
		list from head node, 1) fill the list
		with 0, till n1 > 0 2) fill the list
		with 1, till n2 > 0 3)
		fill the list with 2, till n3 > 0
		*/
  while (ptr != null) {
    if (count[i] == 0) i++;
    else {
      ptr.data = i;
      --count[i];
      ptr = ptr.next;
    }
  }
}

/* Utility functions */

/* Inserts a new Node at front of the list. */
function push(new_data) {
  /*
   * 1 & 2: Allocate the Node & Put in the data
   */
  var new_node = new Node(new_data);

  /* 3. Make next of new Node as head */
  new_node.next = head;

  /* 4. Move the head to point to new Node */
  head = new_node;
}

/* Function to print linked list */
function printList() {
  var temp = head;
  while (temp != null) {
    document.write(temp.data + " ");
    temp = temp.next;
  }
  document.write("<br/>");
}

/* Driver program to test above functions */

/*
		Constructed Linked List is
		1->2->3->4->5->6->7-> 8->8->9->null
		*/
push(0);
push(1);
push(0);
push(2);
push(1);
push(1);
push(2);
push(1);
push(2);

document.write("Linked List before sorting<br/>");
printList();

sortList();

document.write("Linked List after sorting<br/>");
printList();

// This code is contributed by todaysgaurav
