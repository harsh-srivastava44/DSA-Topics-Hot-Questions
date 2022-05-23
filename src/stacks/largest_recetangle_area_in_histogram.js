/**
 * Question : largest rectangle in histogram
 * https://www.codingninjas.com/blog/2021/09/17/the-largest-rectangular-area-in-a-histogram/
 *
 */

import Stack from "./stack";
function nextSmallerElement(heights, n) {
  let st = new Stack(n);
  st.push(-1);
  let smallerElements = [];
  for (let index = n - 1; index >= 0; index--) {
    let curr = heights[index];
    while (st.top !== -1 && heights[st.peak()] >= curr) {
      st.pop();
    }
    smallerElements[index] = st.peak();
    st.push(index);
  }
  return smallerElements;
}
function previousSmallerElements(heights, n) {
  let st = new Stack(n);
  st.push(-1);
  let smallerElements = [];
  for (let index = 0; index < n; index++) {
    let curr = heights[index];
    while (st.top !== -1 && heights[st.peak()] >= curr) {
      st.pop();
    }
    smallerElements[index] = st.peak();
    st.push(index);
  }
  return smallerElements;
}
function largesRectangleInHistogram(heights = []) {
  let n = heights.length;
  let next = nextSmallerElement(heights, n);
  let previous = previousSmallerElements(heights, n);
  let area = -1;
  for (let index = 0; index < n; index++) {
    let l = heights[index];
    if (next[index] === -1) {
      next[index] = n;
    }
    let b = next[index] - previous[index] - 1;
    let newArea = l * b;
    area = area > newArea ? area : newArea;
  }
  return area;
}

console.log(largesRectangleInHistogram([2, 1, 5, 6, 2, 3]));
