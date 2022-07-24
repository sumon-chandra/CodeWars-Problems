function fusc(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return n + fusc(n - 1);
  }
}

console.log(fusc(0));
console.log(fusc(1));
console.log(fusc(85));
