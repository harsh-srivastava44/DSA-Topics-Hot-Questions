import Dll from "./dll";

let dll = new Dll();
dll.insert(11);
dll.insert(4);
dll.insert(23);
dll.insert(14);

dll.print();
dll.printReverse();
dll.reverseList();
console.log("-----");
dll.print();
dll.printReverse();
