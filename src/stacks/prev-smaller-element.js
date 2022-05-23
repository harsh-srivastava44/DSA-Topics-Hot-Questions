import Stack from "./stack";

function prevSmallerElement(array = []) {
  let st = new Stack(array.length);
  st.push(-1);
  let smallerElements = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (st.peak() < element) {
      smallerElements.push(st.peak());
      st.push(element);
    } else {
      while (!(st.peak() < element)) {
        st.pop();
      }
      smallerElements.push(st.peak());
      st.push(element);
    }
  }
  return smallerElements;
}

console.log(prevSmallerElement([2, 3, 4]));
