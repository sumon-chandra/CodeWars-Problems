/**
 * This problem take an array with smallest number and highest number from an array.
 */

const minMax = (arr) => [Math.min(...arr), Math.max(...arr)];

console.log(minMax([1, 2, 3, 4, 5])); //  [1, 5]
console.log(minMax([2334454, 5])); //  [5, 2334454]
console.log(minMax([5])); //  [5, 5]
