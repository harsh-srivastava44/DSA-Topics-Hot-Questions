function sort(arr, n) {
  if (n === 0 || n === 1) return;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
  sort(arr, n - 1);
}

let unsorted = [5, 2, 7, 4, 1, 3];
sort(unsorted, unsorted.length);
console.log(unsorted);
