import Stack from "./stack";

let st = new Stack(5);

st.push(7);
st.push(1);
st.push(4);

function insertAtBottom(st, element) {
  if (st.isEmpty()) return;
  function solve() {
    if (st.isEmpty()) {
      st.push(element);
      return;
    } else {
      let elem = st.pop();
      solve();
      st.push(elem);
    }
  }
  solve();
}
insertAtBottom(st, 10);

console.log(st.arr);
