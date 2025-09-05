const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const [N, K] = input;

const minSum = (K * (K + 1)) / 2;

if (N < minSum) {
  console.log(-1);
} else {
  const extra = N - minSum;
  const r = extra % K;
  console.log(r === 0 ? K - 1 : K);
}