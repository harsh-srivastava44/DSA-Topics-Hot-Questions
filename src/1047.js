/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let stack = [];
  let i = 0;

  while (i < s.length) {
    if (stack.length > 0 && stack[stack.length - 1] === s[i]) stack.pop();
    else stack.push(s[i]);
    i++;
  }
  return stack.join("");
};
console.log(removeDuplicates("aacaa"));
