function removeall(s, part) {
  while (s.indexOf(part) >= 0 && s.length > 0) {
    s = s.replace(part, "");
  }
  return s;
}

console.log(removeall("eemckxmckx", "emckx"));
