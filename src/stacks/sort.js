import Stack from "./stack";

let st = new Stack(5);

st.push(5);
st.push(-2);
st.push(9);
st.push(-7);
st.push(3);

console.log("before", [...st.arr]);

function sortStack(st) {
  if (st.isEmpty()) return;
  let elem = st.pop();
  sortStack(st);
  insertSorted(st, elem);
}

function insertSorted(st, elem) {
  if (st.isEmpty() || (st.top !== -1 && st.peak() < elem)) {
    st.push(elem);
    return;
  } else {
    let n = st.pop();
    insertSorted(st, elem);
    st.push(n);
  }
}

sortStack(st);

console.log("after", st.arr);
