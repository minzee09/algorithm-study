const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const T = parseInt(lines[0], 10);

function isStrictPalindrome(s, l, r) {
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++; r--;
  }
  return true;
}

function classify(s) {
  let l = 0, r = s.length - 1;
  while (l < r && s[l] === s[r]) {
    l++; r--;
  }
    
  if (l >= r) return 0;
  if (isStrictPalindrome(s, l + 1, r) || isStrictPalindrome(s, l, r - 1)) {
    return 1;
  }
  return 2;
}

let out = [];
for (let i = 1; i <= T; i++) {
  const s = lines[i].trim();
  out.push(String(classify(s)));
}
console.log(out.join('\n'));
