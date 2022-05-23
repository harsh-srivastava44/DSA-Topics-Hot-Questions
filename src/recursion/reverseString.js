function reverseString(str, i, n) {
  if (i > n - 1 - i) return;

  [str[i], str[n - i - 1]] = [str[n - i - 1], str[i]];

  reverseString(str, ++i, n);
  return str.join("");
}

let name = "donald".split("");

console.log(reverseString(name, 0, name.length));
