// --------- Method 01

// const well = (arr) => {
//   let good = [];
//   arr.map((e) => e === "good" && good.push(e));
//   if (good.length === 0) {
//     return "Fail!";
//   } else if (good.length === 1) {
//     return "Publish!";
//   } else if (good.length === 2) {
//     return "Publish!";
//   } else if (good.length > 2) {
//     return "I smell a series!";
//   }
// };

// --------- Method 02

const well = (arr) => {
  const findGood = arr.filter((e) => e === "good").length;
  return findGood < 1 ? "Fail" : findGood < 3 ? "Publish!" : "I small a series";
};
console.log(well(["good", "bad", "bad", "bad", "bad"]));
console.log(well(["bad", "bad", "bad", "bad"]));
console.log(well(["good", "bad", "bad", "bad", "good", "good", "good", "bad"]));
