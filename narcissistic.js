function narcissistic(value) {
  let total = 0;
  const valuesOfArr = value.toString().split("");
  for (const n of valuesOfArr) {
    total += Math.pow(n, valuesOfArr.length);
  }
  return value === total;
}
console.log(narcissistic(371));
