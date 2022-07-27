function smallEnough(a, limit) {
  const n = Math.max(...a);
  return n <= limit;
}

console.log(smallEnough([66, 101], 200)); // true
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)); // false
