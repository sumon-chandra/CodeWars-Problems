/**
 * This problem takes true or false statements.
 * Check the string, if the ends string is include in the main string then return true, otherwise return false
 */
const solution = (s, e) => s.endsWith(e);

console.log(solution("abcde", "cde")); // true
console.log(solution("abcde", "abc")); // false
