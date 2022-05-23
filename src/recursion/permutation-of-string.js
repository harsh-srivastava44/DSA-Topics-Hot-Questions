/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let ans = [];
  solve([...nums], 0, ans);
  return ans;
};
function solve(params, index, ans) {
  if (index >= params.length) {
    ans.push([...params]);
    return;
  }
  for (let i = index; i < params.length; i++) {
    [params[index], params[i]] = [params[i], params[index]];
    solve(params, index + 1, ans);
    [params[index], params[i]] = [params[i], params[index]];
  }
}

console.log(...permute("abc"));
