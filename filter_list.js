const filter_list = (l) => l.filter((v) => typeof v === "number");
console.log(filter_list([1, 3, 4, 5, "5", "a", "5", 3, 7]));
