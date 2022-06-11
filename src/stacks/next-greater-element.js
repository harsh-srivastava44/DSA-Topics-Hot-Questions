import Stack from "./stack";

function getNextGreaterElements(arr = []) {
  let stack = new Stack();
  let nextElements = [];
  stack.add(-1);
  for (let index = arr.length - 1; index >= 0; index--) {
    console.log("peek", "arr", stack.peek(), arr[index]);
    if (stack.peek() > arr[index]) {
      nextElements.push(stack.peek());
      console.log(";;;", arr);
      stack.add(arr[index]);
    } else {
      while (!stack.isEmpty() && stack.peek() < arr[index]) {
        stack.remove();
      }
      stack.isEmpty() ? nextElements.push(-1) : nextElements.push(stack.peek());
      stack.add(arr[index]);
    }
  }
  return nextElements.reverse();
}

console.log(getNextGreaterElements([1, 3, 2, 4]));
