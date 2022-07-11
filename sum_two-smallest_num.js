const sumTwoSmallestNumbers = (numbers) => {
  const min = Math.min(...numbers);
  const secondMin = numbers.reduce(
    (pre, cur) => (pre > cur && cur !== min ? cur : pre),
    Infinity
  );
  const ans = min + secondMin;
  return ans;
};

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
