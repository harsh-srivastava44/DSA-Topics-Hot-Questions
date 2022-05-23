/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  swaptTopRightToBottomLeft(matrix);
  swapRightToLeft(matrix);
};

function swaptTopRightToBottomLeft(matrix) {
  let len = matrix.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[i][j] = temp;
    }
  }
}
function swapRightToLeft(matrix) {
  let len = matrix.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][len - j];
      matrix[i][j] = temp;
    }
  }
}
