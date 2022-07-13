const findShort = (str) => {
  const arr = str.split(" ");
  const ans = arr.sort((a, b) => a.length - b.length);
  return ans[0].length;
};
// findShort("bitcoin take over the world maybe who knows perhaps");
console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // 3
