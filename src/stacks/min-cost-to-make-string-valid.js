import Stack from "./stack";
function minCostToBalance(str) {
  if (str.length % 2 !== 0) return -1;
  let st = new Stack(str.length);
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (element === "{") {
      st.push(element);
    } else {
      if (!st.isEmpty() && st.peak() === "{") {
        st.pop();
      } else {
        st.push(element);
      }
    }
  }
  let a = 0,
    b = 0;

  while (!st.isEmpty()) {
    if (st.peak() === "{") b++;
    else a++;
    st.pop();
  }
  let ans = Math.floor((a + 1) / 2) + Math.floor((b + 1) / 2);
  return ans;
}
console.log(minCostToBalance("{{"));
