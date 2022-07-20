function fusc(n) {
  if (n === 0) {
    return 0;
  } else {
    return n + fusc(n - 1);
  }
}

console.log(fusc(0));
console.log(fusc(1));
console.log(fusc(85));
