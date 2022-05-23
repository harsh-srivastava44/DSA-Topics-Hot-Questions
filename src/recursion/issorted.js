let arr = [-1, 2, 3, 5, 8];
let len = arr.length;

function isSorted(arr = [], size) {
  if (size === 0 || size === 1) return true;
  if (arr[0] > arr[1]) return false;
  else {
    let isMatching = isSorted(arr.slice(1), (size -= 1));
    return isMatching;
  }
}
console.log(isSorted(arr, len));
