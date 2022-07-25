const isAnagram = (str, test) => {
  let s = str.toLowerCase();
  let t = test.toLowerCase();
  const str2 = s.split("").sort().join("");
  const str1 = t.split("").sort().join("");
  return str1 !== str2 ? false : true;
};

// const isAnagram = (str, test) => {
//   let s = str.toLowerCase();
//   let t = test.toLowerCase();
//   s.length !== t.length && false;
//   const count = {};
//   for (let i = 0; i < s.length; i++) {
//     if (!count[s[i]]) count[s[i]] = 0;
//     if (!count[t[i]]) count[t[i]] = 0;
//     count[s[i]]++;
//     count[t[i]]--;
//   }
//   for (const chr in count) {
//     if (count[chr] !== 0) return false;
//   }
//   return true;
// };

console.log(isAnagram("foefet", "toffee")); // true
console.log(isAnagram("dumble", "bumble")); // false
console.log(isAnagram("Buckethead", "DeathCubeK")); // true
