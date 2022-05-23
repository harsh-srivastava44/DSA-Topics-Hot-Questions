function letterCombinations(params) {
  let ans = [];
  if (params?.length === 0) return ans;
  let output = "";
  let index = 0;
  let mapping = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz"
  ];
  solve(params, ans, output, index, mapping);
  return ans;
}

function solve(params, ans, output, index, mapping) {
  //base case
  if (index >= params.length) {
    ans.push(output);
    return;
  }
  let number = params[index];

  let value = mapping[number];
  for (let i = 0; i < value.length; i++) {
    let temp = output.concat(value[i]);
    solve(params, ans, temp, index + 1, mapping);
  }
}

console.log(letterCombinations("23"));
