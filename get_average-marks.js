function getAverage(marks) {
  let sum = 0;
  marks.forEach((e) => {
    sum += e;
  });
  return parseInt(sum / marks.length);
}

console.log(getAverage([2, 2, 2, 2]));
