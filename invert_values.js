// ============= Normal Function

// const invert = (arr) => {
//   if (arr.length === 0) {
//     return [];
//   } else {
//     return arr.map((e) => (e < 0 ? Math.abs(e) : -Math.abs(e)));
//   }
// };

// Arrow Function

const invert = (arr) =>
  arr.length === 0 ? [] : arr.map((e) => (e < 0 ? Math.abs(e) : -Math.abs(e)));

console.log(invert([1, 2, 3, 4, 5])); // [-1,-2,-3,-4,-5]
console.log(invert([1, -2, 3, -4, 5])); // [-1,2,-3,4,-5]
console.log(invert([])); // []
