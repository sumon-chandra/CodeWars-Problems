function vaporcode(s) {
  let arr = [];
  const str = s.split("");
  str.map((e) => e !== " " && arr.push(e.toUpperCase()));
  return arr.join("  ");
}

console.log(vaporcode("Lets go to movies"));
