function any(arr, fun) {
  return fun(arr[-1]);
}
const callFunc = any([1, 2, 3, 4], function (v, i) {
  return v > 3;
});
console.log(callFunc);
