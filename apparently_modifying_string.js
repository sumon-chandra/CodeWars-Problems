function apparently(str) {
  const arr = str.split(" ");

  return arr.findIndex((e) => e === "and");
}

console.log(apparently("It is an array and for loop but I know those"));
// 'It is an array and apparently for loop but apparently I know those'
console.log(apparently("and")); // 'and apparently'
console.log(apparently("apparently")); // 'apparently'
