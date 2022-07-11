function accum(s) {
  return [...s]
    .map((chr, index) => chr.toUpperCase() + chr.toLowerCase().repeat(index))
    .join("-");
}
// accum("ZpglnRxqenU");
console.log(accum("ZpglnRxqenU")); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
