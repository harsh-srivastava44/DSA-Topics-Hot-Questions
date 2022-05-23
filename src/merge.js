function MergeSortedArray(arr1, m, arr2, n) {
  let i = 0;
  let j = 0;
  let mergedarray = [];
  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
      mergedarray.push(arr1[i]);
      i++;
    } else {
      mergedarray.push(arr2[j]);
      j++;
    }
  }
  while (i < m) {
    mergedarray.push(arr1[i]);
    i++;
  }
  while (j < n) {
    mergedarray.push(arr2[j]);
    j++;
  }
  return mergedarray;
}

console.log(MergeSortedArray([1, 2, 3, 4], 4, [5, 6, 99], 3));
