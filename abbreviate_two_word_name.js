function abbrevName(name) {
  return name
    .split(" ")
    .map((e) => e[0].toUpperCase())
    .join(".");
}

console.log(abbrevName("Patrick Feenan"));
