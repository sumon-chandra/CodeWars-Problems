/**
 * If s.length dose not match with t.length then return false
 * If individual character dose not match each other of the s & t , then return false
 * If individual character dose match each other and there are same length then return true
 */

//   Method 01

/* const isAnagram = (str, test) => {
  let s = str.toLowerCase();
  let t = test.toLowerCase();
  const str1 = s.split("").sort().join("").toLowerCase();
  const str2 = t.split("").sort().join("").toLowerCase();
  return str1 !== str2 ? false : true;
}; */

//  Method  02

const isAnagram = (str, test) => {
  let s = str.toLowerCase();
  let t = test.toLowerCase();
  s.length !== t.length && false;
  let count = {};
  for (let i = 0; i < s.length; i++) {
    if (!count[s[i]]) count[s[i]] = 0;
    if (!count[t[i]]) count[t[i]] = 0;
    count[s[i]]++;
    count[t[i]]--;
  }
  for (const chr in count) {
    if (count[chr] !== 0) return false;
  }
  return true;
};
console.log(isAnagram("abcd", "cadb"));
console.log(isAnagram("abcd", "cadub"));
console.log(isAnagram("Buckethead", "DeathCubeK"));
