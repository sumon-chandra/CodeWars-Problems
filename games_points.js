const points = (games) => {
  let totalPoints = 0;
  games.map((g) => {
    const num = g.split(":");
    const x = num[0];
    const y = num[1];
    if (x > y) {
      totalPoints += 3;
    }
    if (x === y) {
      totalPoints += 1;
    }
  });
  return totalPoints;
};
console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
