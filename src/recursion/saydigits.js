let spells = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];

function callOut(n) {
  if (n === 0) return;
  let indi = n % 10;

  n = n / 10;
  callOut(Math.floor(n));

  console.log(spells[indi]);
}

callOut(402);
