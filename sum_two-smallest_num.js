function sumTwoSmallestNumbers(numbers) {
  let result = numbers.sort((a, b) => a - b).slice(0, 2);
  return result.reduce((a, b) => a + b);
}
// sumTwoSmallestNumbers([5, 8, 12, 19, 22]);
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
