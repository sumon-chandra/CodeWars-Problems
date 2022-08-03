const count = (arr) => {
  return arr.reduce((counts, index) => {
    counts[index] = (counts[index] || 0) + 1;
    return counts;
  }, {});
};
// count(["a", "a", "b", "b", "b"]);
console.log(count(["a", "a", "b", "b", "b"]));
