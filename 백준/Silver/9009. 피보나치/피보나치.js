const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let idx = 0;
const T = input[idx++];

const F = [1, 2];
const LIMIT = 1_000_000_000;
while (true) {
  const next = F[F.length - 1] + F[F.length - 2];
  if (next > LIMIT) break;
  F.push(next);
}

let out = [];
for (let t = 0; t < T; t++) {
  let n = input[idx++];
  const picked = [];

  // 큰 피보나치 수부터 greedy 선택
  for (let i = F.length - 1; i >= 0 && n > 0; i--) {
    if (F[i] <= n) {
      picked.push(F[i]);
      n -= F[i];
    }
  }

  // 오름차순 출력 요구 → reverse 해서 join
  picked.sort((a, b) => a - b);
  out.push(picked.join(' '));
}

console.log(out.join('\n'));
