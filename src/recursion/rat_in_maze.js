function findPath(m, n) {
  let path = "";
  let ans = [];
  let initX = 0,
    initY = 0;
  let visited = Array(n)
    .fill()
    .map(() => Array(n).fill(0));

  if (m[initX][initY] === 0) return ans;

  solve(m, n, initX, initY, path, ans, visited);
  return ans;
}

const isSafe = function (m, n, x, y, visited) {
  return (
    x >= 0 && x < n && y >= 0 && y < n && visited[x][y] === 0 && m[x][y] === 1
  );
};

function solve(m, n, x, y, path, ans, visited) {
  if (x === n - 1 && y === n - 1) {
    ans.push(path);
    return;
  }
  visited[x][y] = 1;
  let newX = x + 1,
    newY = y;
  if (isSafe(m, n, newX, newY, visited)) {
    path = path + "D";
    solve(m, n, newX, newY, path, ans, visited);
    path = path.substring(0, path.length - 1);
  }
  newX = x;
  newY = y - 1;
  if (isSafe(m, n, newX, newY, visited)) {
    path = path + "L";
    solve(m, n, newX, newY, path, ans, visited);
    path = path.substring(0, path.length - 1);
  }
  newX = x;
  newY = y + 1;
  if (isSafe(m, n, newX, newY, visited)) {
    path = path + "R";
    solve(m, n, newX, newY, path, ans, visited);
    path = path.substring(0, path.length - 1);
  }
  newX = x - 1;
  newY = y;
  if (isSafe(m, n, newX, newY, visited)) {
    path = path + "U";
    solve(m, n, newX, newY, path, ans, visited);
    path = path.substring(0, path.length - 1);
  }
  visited[x][y] = 0;
}

let a = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1]
];
let b = a.length;

console.log([...findPath(a, b)]);
