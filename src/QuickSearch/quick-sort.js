function quickSort(arr, s, e) {
  if (s >= e) return;
  //find partition
  let p = partition(arr, s, e);

  //left sort using recusrion
  quickSort(arr, s, p - 1);

  //right part sort using recursion
  quickSort(arr, p + 1, e);

  return arr;
}

function partition(arr, s, e) {
  let pivot = arr[s];
  let cont = 0;
  for (let i = s + 1; i <= e; i++) {
    if (arr[i] <= pivot) cont++;
  }
  let pivotIndex = s + cont;
  //place pivot at right position
  [arr[s], arr[pivotIndex]] = [arr[pivotIndex], arr[s]];

  let i = s,
    j = e;

  while (i < pivotIndex && j > pivotIndex) {
    while (arr[i] <= pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i < pivotIndex && j > pivotIndex) {
      [arr[i++], arr[j--]] = [arr[j], arr[i]];
    }
  }
  return pivotIndex;
}

let arr = [3, 2, 89, 22, 45, 12];
console.log(quickSort(arr, 0, arr.length - 1));
