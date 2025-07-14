const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(/\s+/)
  .map(Number);

const M = input[0];
let ball = 1;   // 처음에 1번 컵 아래에 공이 있음
let idx = 1;

for (let i = 0; i < M; i++) {
  const x = input[idx++];
  const y = input[idx++];
  if (ball === x) {
    ball = y;
  } else if (ball === y) {
    ball = x;
  }
}

console.log(ball);
