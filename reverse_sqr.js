const reverseSeq = (n) => {
  let rs = [];
  for (let i = 1; i <= n; i++) {
    rs.push(i);
  }
  return rs.reverse();
};
// reverseSeq(5);
console.log(reverseSeq(5)); // [5, 4, 3, 2, 1]
