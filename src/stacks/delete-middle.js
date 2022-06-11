import Stack from "./stack";

let st = new Stack(5);

st.push(1);
st.push(2);
st.push(3);
st.push(4);
st.push(5);

function deleteMiddle(st, size) {
  let count = 0;
  const solve = (st, size) => {
    if (count === Math.ceil(size / 2)) {
      st.pop();
      return;
    }
    let elem = st.pop();
    count++;
    solve(st, size);
    st.push(elem);
  };
  solve(st, size);
}

deleteMiddle(st, st.size);
console.log(st.size);
