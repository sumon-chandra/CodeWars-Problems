function XO(str) {
  let x = 0;
  let o = 0;
  const text = str.split("");
  for (const e of text) {
    e.toLowerCase() === "x" && x++;
    e.toLowerCase() === "o" && o++;
  }
  return x === o ? true : false;
}

console.log(XO("xxOo")); // True
console.log(XO("Oo")); // True
console.log(XO("ooom")); // False
console.log(XO("xo")); // True
console.log(XO("zpzpzpp")); // True - when no 'x' and 'o' is present should return true
