const input = require('fs').readFileSync(0, 'utf8').trimEnd().split('\n');
const n = Number(input[0]);

const map = {
  'A+': 43, 'A0': 40, 'A-': 37,
  'B+': 33, 'B0': 30, 'B-': 27,
  'C+': 23, 'C0': 20, 'C-': 17,
  'D+': 13, 'D0': 10, 'D-': 7,
  'F': 0,
};

let sumInt = 0;
let credits = 0;

for (let i = 1; i <= n; i++) {
  const p = input[i].trim().split(/\s+/);
  const c = Number(p[1]);
  const g = p[2];
  credits += c;
  sumInt += c * map[g];
}

const num = BigInt(sumInt) * 10n;
const den = BigInt(credits);
const cents = Number((2n * num + den) / (2n * den));

const whole = Math.floor(cents / 100);
const frac = String(cents % 100).padStart(2, '0');
console.log(`${whole}.${frac}`);
