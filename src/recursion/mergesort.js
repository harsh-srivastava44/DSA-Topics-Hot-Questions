function mergeSorted(arr, s, e) {
  let mid = parseInt(s + (e - s) / 2);
  let len1 = mid - s + 1;
  let len2 = e - mid;
  let arr1 = [];
  let arr2 = [];
  let mainarrayIndex = s;

  for (let k = 0; k < len1; k++) {
    arr1.push(arr[mainarrayIndex++]);
  }
  mainarrayIndex = mid + 1;
  for (let k = 0; k < len2; k++) {
    arr2.push(arr[mainarrayIndex++]);
  }
  let ind1 = 0;
  let ind2 = 0;
  mainarrayIndex = s;
  while (ind1 < len1 && ind2 < len2) {
    if (arr1[ind1] < arr2[ind2]) {
      arr[mainarrayIndex++] = arr1[ind1++];
    } else {
      arr[mainarrayIndex++] = arr2[ind2++];
    }
  }
  while (ind1 < len1) {
    arr[mainarrayIndex++] = arr1[ind1++];
  }
  while (ind2 < len2) {
    arr[mainarrayIndex++] = arr2[ind2++];
  }
}

function merge(arr, s, e) {
  if (s >= e) return;
  let mid = parseInt(s + (e - s) / 2, 10);

  merge(arr, s, mid);
  merge(arr, mid + 1, e);

  mergeSorted(arr, s, e);
}

let sample = [38, 27, 43, 3, 9, 82, 10];
merge(sample, 0, sample.length - 1);
console.log(sample);
