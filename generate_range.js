function generateRange(min, max, step) {
  let ans = [];
  for (i = min; i <= max; i += step) {
    ans.push(i);
  }
  return ans;
}

console.log(generateRange(2, 10, 2));
