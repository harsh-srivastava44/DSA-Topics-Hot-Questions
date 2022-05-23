import Stack from "./stack";

//stack use case -  check if paranthesis is balance
function checkBalance(str) {
  let map = {
    "}": "{",
    ")": "(",
    "]": "["
  };
  let len = str.length;
  let st = new Stack(len);

  for (let i = 0; i < len; i++) {
    if (Object.keys(map).includes(str[i])) {
      if (!st.isEmpty()) {
        if (st.peak() === map[str[i]]) st.pop();
      } else return false;
    } else {
      st.push(str[i]);
    }
  }
  return st.top === -1;
}

let str1 = "{[()]}"; //valid
let str2 = "{}[]()"; // valid

console.log(checkBalance(str2));
