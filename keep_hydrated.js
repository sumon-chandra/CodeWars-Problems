const litres = (time) => Math.floor(time * 0.5);

console.log(litres(2)); // 1
console.log(litres(1.4)); // 0
console.log(litres(12.3)); // 6
console.log(litres(0)); // 0
console.log(litres(1787)); // 893
