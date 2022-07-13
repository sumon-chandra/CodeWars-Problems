function sumArray(arr) {
  const spl = arr.reduce((a, b) => Math.min(a, b));
  return spl;
}

console.log(sumArray([]));
console.log(sumArray([3]));
console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([-6, -20, -1, -10, -12]));
console.log(sumArray([-6, 20, -1, 10, -12]));
