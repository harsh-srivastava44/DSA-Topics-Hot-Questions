/**
 *
 * Question : Find the celebrity
 * https://leetcode.com/problems/find-the-celebrity/
 */

import Stack from "./stack";
function findCelebrity(M, n) {
  let st = new Stack(n);
  for (let index = 0; index < n; index++) {
    st.push(index);
  }

  /*
   * 1 - he may be a celebrity
   */

  while (st.top !== 0) {
    let a = st.pop();
    let b = st.pop();
    if (knows(M, a, b, n)) {
      st.push(b);
    } else {
      st.push(a);
    }
  }
  /**
   * check 1 : celebrity knows no one (row check)
   */
  let zeroCount = 0;
  for (let index = 0; index < n; index++) {
    if (M[st.peak()][index] === 0) zeroCount++;
  }
  if (zeroCount !== n - 1) return -1;

  /**
   * check 2 : Everyone knows celebrity (column check)
   */
  let colCount = 0;
  for (let index = 0; index < n; index++) {
    if (M[index][st.peak()] === 1) colCount++;
  }
  if (colCount !== n) return -1;
  return st.peak();
}

function knows(M, a, b, n) {
  if (M[a][b] === 1) {
    return true;
  } else {
    return false;
  }
}

/**
 * return -1 as both know each other
 */
// console.log(
//   findCelebrity(
//     [
//       [0, 1],
//       [1, 0]
//     ],
//     2
//   )
// );
/**
 * person 1 is celebrity as it knows no one
 */
console.log(
  findCelebrity(
    [
      [1, 1, 0],
      [0, 1, 0], // -> may be a celebity
      [1, 1, 1]
    ],
    3
  )
);
