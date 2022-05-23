/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let row = matrix.length;
  let col = matrix[0].length;
  let count = 0;
  let total = row * col;
  let ans = [];
  //index
  let startingRow = 0;
  let startingColumn = 0;
  let endingRow = row - 1;
  let endingColumn = col - 1;
  while (count < total) {
    //print starting row
    for (
      let index = startingColumn;
      count < total && index <= endingColumn;
      index++
    ) {
      ans.push(matrix[startingRow][index]);
      count++;
    }
    startingRow++;

    //print ending column
    for (
      let index = startingRow;
      count < total && index <= endingRow;
      index++
    ) {
      ans.push(matrix[index][endingColumn]);
      count++;
    }
    endingColumn--;

    //print endingRow
    for (
      let index = endingColumn;
      count < total && index >= startingColumn;
      index--
    ) {
      ans.push(matrix[endingRow][index]);
      count++;
    }
    endingRow--;

    //print stating column
    for (
      let index = endingRow;
      count < total && index >= startingRow;
      index--
    ) {
      ans.push(matrix[index][startingColumn]);
      count++;
    }
    startingColumn++;
  }
  return ans;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);
