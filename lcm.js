function sumDifferencesBetweenProductsAndLCMs(pairs) {
  const gcd = (x, y) => (x == 0 ? y : y % x);
  const lcm = (x, y) => (x * y == 0 ? 0 : console.log((x * y) / gcd(x, y)));
  return pairs
    .map((c) => c[0] * c[1] - lcm(c[0], c[1]))
    .reduce((a, c) => a + c, 0);
}
console.log(
  sumDifferencesBetweenProductsAndLCMs([
    [15, 18],
    [4, 5],
    [12, 60],
  ])
);
