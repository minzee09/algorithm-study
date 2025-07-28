const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

// BigInt 변수 초기화
let a = 0n, b = 1n;

if (n === 0) {
  console.log('0');
} else {
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  console.log(b.toString());
}
