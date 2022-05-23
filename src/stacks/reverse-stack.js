import Stack from "./stack";

let st = new Stack(5);

st.push(7);
st.push(1);
st.push(4);
console.log("before", [...st.arr]);

function insertAtBottom(st, num) {
  if (st.isEmpty()) {
    st.push(num);
    return;
  } else {
    let elem = st.pop();
    insertAtBottom(st, num);
    st.push(elem);
  }
}
function reverse(st) {
  if (st.isEmpty()) return;
  let num = st.pop();
  reverse(st);
  insertAtBottom(st, num);
}

reverse(st);

console.log("after", st.arr);
