const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [L, W, H] = input[0].split(' ').map(Number);
const N = Number(input[1]);

const cnt = Array(20).fill(0n);
for (let i = 0; i < N; i++) {
  const [a, b] = input[2 + i].split(' ').map(Number);
  cnt[a] = BigInt(b);
}

let filled = 0n;
let used = 0n;

for (let i = 19; i >= 0; i--) {
  const size = 1 << i;
  const fit =
    BigInt(Math.floor(L / size)) *
    BigInt(Math.floor(W / size)) *
    BigInt(Math.floor(H / size));

  let need = fit - filled;
  if (need < 0n) need = 0n;

  const take = need <= cnt[i] ? need : cnt[i];
  used += take;
  filled += take;

  if (i > 0) filled *= 8n;
}

const total = BigInt(L) * BigInt(W) * BigInt(H);
console.log(filled === total ? used.toString() : '-1');
