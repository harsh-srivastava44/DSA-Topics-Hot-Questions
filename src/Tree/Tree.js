/**
 * Tree terms to keep in mind
 * Node - a partciular single node in tree
 * Root - The starting point of tree
 * Children  - A node can have multiple children
 * Parent - The parent who has a child node
 * Sibilings - The nodes which have a common parent
 * Ancestor - When we traverse the nodes connected up in tree are ancestors
 * Descendent - When we traverse the nodes conected down in tree are called descendent
 * Leaf - A node which has no children elements
 */

export class Node {
  constructor(element) {
    this.element = element;
    this.left = null;
    this.right = null;
  }
}

function buildTree(root) {
  let data = prompt("Enter the data");
  root = new Node(data);
  if (data === -1) return null;
  console.log("Enter the data for left part");
  root.left = buildTree(root.left);
  console.log("Enter the data for left part");
  root.right = buildTree(root.right);
  return root;
}

function main() {
  let root = null;

  //creating a tree
  root = buildTree(root);
  return 0;
}
