import Stack from "./stack";

let st = new Stack(5);

st.add(7);
st.add(1);
st.add(4);

function insertAtBottom(st, element) {
  if (st.isEmpty()) return;
  function solve() {
    if (st.isEmpty()) {
      st.add(element);
      return;
    } else {
      let elem = st.remove();
      solve();
      st.add(elem);
    }
  }
  solve();
}
insertAtBottom(st, 10);

console.log(st.items);
