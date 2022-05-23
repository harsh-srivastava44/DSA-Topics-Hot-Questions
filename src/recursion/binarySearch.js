let list = [1, 2, 3, 9, 12, 435, 888, 999];

let size = list.length;

function binarySearch(arr, s, e, k) {
  if (s > e) return false;

  let mid = Math.floor(s + (e - s) / 2);
  console.log("mid", mid, arr[mid]);

  if (arr[mid] === k) return true;

  if (k > arr[mid]) return binarySearch(arr, mid + 1, e, k);
  else return binarySearch(arr, s, mid - 1, k);
}

console.log(binarySearch(list, 0, size - 1, 435));
