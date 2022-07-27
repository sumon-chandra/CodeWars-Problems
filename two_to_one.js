/**
 * This problem return a string that take sorted english later.
 */

const longest = (s1, s2) => {
  const str = `${s1}${s2}`;
  const arr = str.split("").sort();
  return Array.from(new Set(arr)).join("");
};

console.log(longest("aretheyhere", "yestheyarehere")); // "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); // 'abcdefghilnoprstu'
