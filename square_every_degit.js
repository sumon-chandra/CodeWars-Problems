const squareDigits = (n) => {
  let ans = String(n)
    .split("")
    .map((e) => Math.pow(e, 2))
    .join("");
  return Number(ans);
};

console.log(squareDigits(3212)); // 9414);
console.log(squareDigits(2112)); // 4114);
