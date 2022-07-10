const lovefunc = (f1, f2) => {
  const first = f1 % 2;
  const sec = f2 % 2;
  if (first === 0 && sec === 0) {
    return false;
  }
  if (first !== 0 && sec !== 0) {
    return false;
  } else {
    return true;
  }
};

// -- Short way
// const lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2;

console.log(lovefunc(1, 4));
console.log(lovefunc(1, 1));
console.log(lovefunc(4, 4));
console.log(lovefunc(0, 0));
