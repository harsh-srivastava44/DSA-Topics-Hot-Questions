import { Node } from "./sll";

class RandomNode extends Node {
  constructor(element) {
    super(element);
    this.arb = null;
  }
}

let node = new RandomNode(1);
node.next = new RandomNode(2);
node.next.next = new RandomNode(3);
node.next.next.next = new RandomNode(4);

node.arb = node.next;
node.next.arb = node.next.next.next;

/**
 * S.C = O(n)
 * Taking Map
 */
// class Solution1 {
//   //Function to clone a linked list with next and random pointer.
//   copyList(head) {
//     let temp = head;
//     let listHead = null;
//     let curr = null;
//     while (temp) {
//       let node = new Node(temp.element);
//       if (listHead === null) {
//         curr = node;
//         listHead = curr;
//       } else {
//         curr.next = node;
//         curr = node;
//       }
//       temp = temp.next;
//     }

//     let mapping = this.getMap(head, listHead);

//     let head1 = head;
//     let list1 = listHead;
//     while (list1 && head1) {
//       list1.arb = mapping.get(head1.arb) || null;
//       list1 = list1.next;
//       head1 = head1.next;
//     }
//     return listHead;
//   }
//   getMap(head1, head2) {
//     let map = new Map();
//     let temp1 = head1;
//     let temp2 = head2;
//     while (temp1 !== null && temp2 !== null) {
//       map.set(temp1, temp2);
//       temp1 = temp1.next;
//       temp2 = temp2.next;
//     }
//     return map;
//   }
// }

// let sol = new Solution1();
// console.log("--->", sol.copyList(node));

/**
 * S.C  = O(1)
 * Without use of Map
 */
class Solution2 {
  createList(head) {
    let listHead = null;
    let curr = null;
    let temp = head;
    while (temp) {
      let node = new Node(temp.element);
      if (listHead === null) {
        curr = node;
        listHead = curr;
      } else {
        curr.next = node;
        curr = node;
      }
      temp = temp.next;
    }
    return listHead;
  }
  copyList(head) {
    //Step1 : Create a clone list
    let listHead = this.createList(head);

    //Step2 : add cloned nodes in between original list
    let originalNode = head;
    let clonedNode = listHead;
    while (originalNode && clonedNode) {
      //marking next of originalNode to clonedList
      let next = originalNode.next;
      originalNode.next = clonedNode;
      originalNode = next;

      //marking next of clonedNode to originalList
      next = clonedNode.next;
      clonedNode.next = originalNode;
      clonedNode = next;
    }

    //Step3 : random pointer copy
    let temp = head;
    while (temp) {
      if (temp.next) {
        temp.next.arb = temp.arb ? temp.arb.next : null;
      }
      temp = temp.next.next;
    }

    //Step4 : reverse changes in step 2
    clonedNode = listHead;
    originalNode = head;

    while (originalNode && clonedNode) {
      originalNode.next = clonedNode.next;
      originalNode = originalNode.next;

      if (originalNode) {
        clonedNode.next = originalNode.next;
      }
      clonedNode = clonedNode.next;
    }

    //Step5 : return ans
    return listHead;
  }
}
let sol = new Solution2();
console.log("--->", sol.copyList(node));
