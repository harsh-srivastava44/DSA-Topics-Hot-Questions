function subSets(arr) {
  let ans = [];
  let output = [];
  let index = 0;

  solve(arr, output, index, ans);
  return ans;
}

function solve(arr, output, index, ans) {
  let o1 = [...output];
  if (index >= arr.length) {
    ans.push(o1);
    return;
  }

  //exclude
  solve(arr, o1, index + 1, ans);

  //include
  o1.push(arr[index]);
  solve(arr, o1, index + 1, ans);
}

let arr = [1, 2, 3];

console.log(...subSets(arr));
