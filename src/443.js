/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let s = "";
  let temp = chars[0];
  let count = 0;

  for (let i of chars) {
    if (temp === i) {
      count++;
    } else {
      s = s + `${temp}${count === 1 ? "" : count}`;
      temp = i;
      count = 1;
    }
  }
  s = s + `${temp}${count === 1 ? "" : count}`;

  chars.splice(0, s.length, ...s);

  console.log(chars);
};

console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
);
