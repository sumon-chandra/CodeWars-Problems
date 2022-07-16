const closestMultiple10 = (n) => {
  if (n < 10) {
    const small = 10 - n;
    return small + n;
  } else if (n === 10) {
    return 10;
  } else if (n === 20) {
    return 20;
  } else {
    let div = n / 10;
    let str = div.toString();
    let de = str.substring(str.indexOf(".") + 1, str.length);
    const num = Number(de);
    const sub = n - num;
    const ans = num >= 5 ? sub + 10 : n - num;
    return ans;
  }
};

console.log(closestMultiple10(20));
