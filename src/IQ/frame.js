function solution(picture = []) {
  picture = picture.map((item) => `*${item}*`);

  let starObj = Array(picture[0].length).fill("*").join("");
  picture.unshift(starObj);
  picture.push(starObj);
  return picture;
}

console.log(...solution(["abc", "ded"]));
