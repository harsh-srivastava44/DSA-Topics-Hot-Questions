import Stack from "./stack";
function nextSmallerElement(arr = []) {
  let st = new Stack(arr.length);
  st.push(-1);
  let smallerElements = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    if (st.peak() < arr[index]) {
      smallerElements.push(st.peak());
      st.push(arr[index]);
    } else {
      while (!(st.peak() < arr[index])) {
        st.pop();
      }
      smallerElements.push(st.peak());
      st.push(arr[index]);
    }
  }
  return smallerElements.reverse();
}

console.log(nextSmallerElement([2, 3, 1]));
