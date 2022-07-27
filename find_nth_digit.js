const findDigit = (num, nth) => {
  if (Math.abs(num) < nth) {
    return 0;
  } else if (nth <= 0) {
    return -1;
  } else if (num === 0) {
    return o;
  } else {
    const n = Math.abs(num);
    const nArr = `${n}`.split("").reverse();
    return parseInt(nArr[nth - 1]);
  }
};

console.log(findDigit(5673, 4)); // 5
console.log(findDigit(-2825, 3)); // 8
console.log(findDigit(0, 20)); // 0
console.log(findDigit(65, 0)); // -1
console.log(findDigit(24, -8)); // -1
