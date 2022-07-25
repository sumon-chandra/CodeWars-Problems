function reverser(str) {
  if (str) {
    const result = str
      .split(" ")
      .map((s) => s.split("").reverse().join(""))
      .join(" ");
    return result;
  } else {
    return str;
  }
}
// reverser(" ");
console.log(reverser(" "));
