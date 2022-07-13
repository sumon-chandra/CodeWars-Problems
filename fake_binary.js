const fakeBin = (str) => {
  return str
    .split("")
    .map((e) => (e >= 5 ? 1 : 0))
    .join("");
};
console.log(fakeBin("45385593107843568")); // '01011110001100111'
