const descendingOrder = (n) => {
  const newN = n.toString().split("").sort().reverse().join("");
  return Number(newN);
};
console.log(descendingOrder(1));
console.log(descendingOrder(1021));
console.log(descendingOrder(14321));
