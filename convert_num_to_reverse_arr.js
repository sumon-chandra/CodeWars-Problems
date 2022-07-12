function digitize(n) {
  const arr = n.toString().split("").reverse().map(Number);
  return arr;
}

console.log(digitize(35231)); // [1,3,2,5,3]
console.log(digitize(76543)); // [3,4,5,6,7]
