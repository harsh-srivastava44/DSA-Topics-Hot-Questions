function searchInmatrix(matrix, target) {
  let row = matrix.length;
  let col = matrix[0].length;
  let rowi = 0;
  let coli = col - 1;
  while (rowi < row && coli >= 0) {
    let elm = matrix[rowi][coli];
    if (elm === target) return 1;
    if (target < elm) {
      col--;
    } else rowi++;
  }
  return 0;
}
