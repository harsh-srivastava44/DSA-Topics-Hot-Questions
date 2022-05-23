function isPalindrome(str, i) {
  let j = str.length - 1 - i;
  if (i > j) return true;
  if (str[i] !== str[j]) return false;
  else return isPalindrome(str, ++i);
}

let str = "abba";
console.log(isPalindrome(str, 0));
