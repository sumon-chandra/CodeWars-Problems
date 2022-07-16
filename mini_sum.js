function minSum(arr) {
  const num = arr.length / 2;
  let ans = [];
  for (let i = 1; i <= num; i++) {
    ans.push(Math.min(...arr) * Math.max(...arr));
  }
  return ans;
}

console.log(minSum([5, 4, 2, 3]));
console.log(minSum([12, 6, 10, 26, 3, 24]));
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]));
