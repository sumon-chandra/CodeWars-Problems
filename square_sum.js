const squareSum = (numbers) => {
  let sum = 0;
  for (const item of numbers) {
    sum += Math.pow(item, 2);
  }
  return sum;
};
console.log(squareSum([0, 3, 4, 5]));
