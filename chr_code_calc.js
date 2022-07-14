// const getCharCodes = (str) => {
//   return str
//     .split("")
//     .map((chr) => chr.charCodeAt())
//     .join("");
// };
// const sumCharCodes = (charCodes) =>
//   [...charCodes].reduce((total, charCode) => total + parseInt(charCode), 0);

// const calc = (x) => {
//   const total1 = getCharCodes(x);
//   const total2 = total1.replace(/7/g, "1");
//   //   console.log(total1);
//   //   console.log(total2);
//   const test = sumCharCodes(total1) - sumCharCodes(total2);
//   console.log(test);
// };

const calc = (str) => {
  const getChrCode = str
    .split("")
    .map((e) => e.charCodeAt())
    .join("");
  const total1 = [...getChrCode].reduce(
    (pre, curr) => parseInt(pre) + parseInt(curr)
  );
  const replace = getChrCode.replace(/7/g, "1");
  const total2 = [...replace].reduce(
    (pre, curr) => parseInt(pre) + parseInt(curr)
  );
  return total1 - total2;
};

// calc("abcdef");
// calc("aaaaaddddr");
// calc("ifkhchlhfd");
console.log(calc("abcdef"));
console.log(calc("ifkhchlhfd"));
console.log(calc("aaaaaddddr"));
