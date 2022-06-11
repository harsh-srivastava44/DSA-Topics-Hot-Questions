import Stack from "./stack";

let st = new Stack(5);

st.add(5);
st.add(-2);
st.add(9);
st.add(-7);
st.add(3);

console.log("before", [...st.items]);

function sortStack(st) {
  if (st.isEmpty()) return;
  let elem = st.remove();
  sortStack(st);
  insertSorted(st, elem);
}

function insertSorted(st, elem) {
  if (st.isEmpty() || (st.top !== -1 && st.peek() < elem)) {
    st.add(elem);
    return;
  } else {
    let n = st.remove();
    insertSorted(st, elem);
    st.add(n);
  }
}

sortStack(st);

console.log("after", st.items);
