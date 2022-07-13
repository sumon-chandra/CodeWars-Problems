// ========= Method 01

const findShort = (str) => {
  const arr = str.split(" ");
  const ans = arr.sort((a, b) => a.length - b.length);
  return ans[0].length;
};

// ========= Method 02

// const findShort = (str) => {
//   const arr = str.split(" ");
//   let shortestWordLength = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length < shortestWordLength.length) {
//       shortestWordLength = arr[i];
//     }
//   }
//   return shortestWordLength.length;
// };
// findShort("bitcoin take over the world maybe who knows perhaps");
console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // 3
