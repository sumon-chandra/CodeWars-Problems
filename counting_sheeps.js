var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countSheeps(arr) {
  let ans = [];
  const totalTrue = arr.map((e) => e && ans.push(e));
  return ans.length;
}
console.log(countSheeps(array1));
