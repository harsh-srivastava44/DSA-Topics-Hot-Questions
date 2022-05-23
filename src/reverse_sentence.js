function palind(num) {
  let end = num.length - 1;
  let start = 0;
  while (start < end) {
    [num[start++], num[end--]] = [num[end], num[start]];
  }
  start = 0;
  end = 0;
  let temp = 0;
  while (end < num.length) {
    if (num[end] === " ") {
      temp = end;
      end = end - 1;
      while (start <= end - 1) {
        [num[start++], num[end--]] = [num[end], num[start]];
      }
      start = temp + 1;
      end = temp;
    } else if (end === num.length - 1) {
      temp = end;

      while (start <= end - 1) {
        [num[start++], num[end--]] = [num[end], num[start]];
      }
      start = temp + 1;
      end = temp;
    }
    end++;
  }
  return num;
}

console.log(
  palind([
    "t",
    "h",
    "e",
    " ",
    "s",
    "k",
    "y",
    " ",
    "i",
    "s",
    " ",
    "b",
    "l",
    "u",
    "e"
  ])
);
