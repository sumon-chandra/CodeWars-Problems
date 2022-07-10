const humanYearsCatYearsDogYears = (humanYears) => {
  if (humanYears === 1) {
    return [humanYears, 15, 15];
  }
  if (humanYears === 2) {
    return [humanYears, 24, 24];
  }
  const otherYears = humanYears - 2;
  const catNextYears = otherYears * 4;
  const dogNextYears = otherYears * 5;
  return [humanYears, 24 + catNextYears, 24 + dogNextYears];
};
console.log(humanYearsCatYearsDogYears(2));
