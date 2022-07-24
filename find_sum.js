// const findSum = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 1; j < array.length; j++) {
//       if (array[i] + array[i] === 0) {
//         return [array[1], array[j]];
//       }
//     }
//   }
// };

const findSum = (array) => {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

console.log(findSum([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
