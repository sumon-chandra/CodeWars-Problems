function betterThanAverage(cp, mp) {
  const avg = cp.reduce((a, b) => a + b) / cp.length;
  return avg < mp ? true : false;
}

console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)); // False
console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)); // False
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); // True
