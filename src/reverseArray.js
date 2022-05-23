function reverseArray(arr, n) {
  let s = 0;
  let end = n - 1;
  while (s <= end) {
    [arr[s], arr[end]] = [arr[end], arr[s]];
    s++;
    end--;
  }
  return arr;
}

console.log(reverseArray([9, 5, 6, 3], 4));
