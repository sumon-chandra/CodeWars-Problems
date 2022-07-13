function countPositivesSumNegatives(input) {
  let positiveNum = 0;
  let sum = 0;
  if (input === null || input.length === 0) {
    return [];
  } else {
    input.forEach((n) => (n > 0 ? positiveNum++ : (sum += n)));
  }
  return [positiveNum, sum];
}
console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);
