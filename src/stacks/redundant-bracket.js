import Stack from "./stack";
let str1 = "(a*b+(c/d))"; // no redundant brackets
/**
 * has redundat brackets as before closing
 * bracket there's no operator
 */
let str2 = "(b)";

function hasRedundantBrackets(str) {
  let st = new Stack(str.length);
  for (let index = 0; index < str.length; index++) {
    if (["(", "+", "*", "/", "-"].includes(str[index])) {
      st.push(str[index]);
    } else {
      if (str[index] === ")") {
        let isRedundant = true;
        while (st.peak() !== "(") {
          let top = st.peak();
          if (["+", "*", "/", "-"].includes(top)) {
            isRedundant = false;
          }
          st.pop();
        }
        if (isRedundant) {
          return true;
        }
        st.pop();
      }
    }
  }
  return false;
}

console.log(hasRedundantBrackets(str2));
