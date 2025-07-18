const fs = require('fs');
const data = fs.readFileSync('/dev/stdin', 'utf8')
  .trim().split(/\s+/).map(Number);

let idx = 0;
const N = data[idx++];
const S = Array.from({ length: N }, () => data.slice(idx, idx += N));

const half = N / 2;
const limit = 1 << N;
let ans = Infinity;

function nextComb(x) {
  const c = x & -x;
  const r = x + c;
  return r | (((r ^ x) >>> 2) / c);
}

for (let mask = (1 << half) - 1; mask < limit; mask = nextComb(mask)) {
  if (!(mask & 1)) continue;

  let sumA = 0, sumB = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const bitI = (mask >> i) & 1;
      const bitJ = (mask >> j) & 1;
      if (bitI && bitJ) {
        sumA += S[i][j] + S[j][i];
      } else if (!bitI && !bitJ) {
        sumB += S[i][j] + S[j][i];
      }
    }
  }
  const diff = Math.abs(sumA - sumB);
  if (diff < ans) ans = diff;
}

console.log(ans);
