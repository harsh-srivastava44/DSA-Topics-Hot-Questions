/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let row = matrix.length;
  let col = matrix[0].length;

  let s = 0;
  let e = row * col - 1;

  let mid = s + Math.floor((e - s) / 2);

  while (s <= e) {
    let elem = matrix[Math.floor(mid / col)][mid % col];

    if (elem === target) return 1;
    if (elem < target) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
    mid = s + Math.floor((e - s) / 2);
  }
};

searchMatrix([
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
]);
