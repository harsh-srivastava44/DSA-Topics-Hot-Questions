function inserTionSort(arr, n) {
  let i = 1;
  while (i < n) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j]; //shift elments to right
        j--; // keep going left till you find element greater than temp
      } else {
        break;
      }
    }
    arr[j + 1] = temp; // empty space to be filled
    i++;
  }
  return arr;
}

console.log(inserTionSort([3, 2, 1, 97, 8], 5));
