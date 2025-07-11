const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split("\n").map(line => line.trim());

const [N, M] = input[0].split(' ').map(Number);
const board = input
  .slice(1, 1 + N)
  .map(line => line.trim().split(''));

function countRepaint(si, sj, startColor) {
  let cnt = 0;
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      // (x+y) 짝수면 시작색, 홀수면 반대색
      const expected =
        (x + y) % 2 === 0
          ? startColor
          : (startColor === 'W' ? 'B' : 'W');
      if (board[si + x][sj + y] !== expected) cnt++;
    }
  }
  return cnt;
}

let minRepaint = Infinity;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    const repaintW = countRepaint(i, j, 'W');
    const repaintB = countRepaint(i, j, 'B');
    minRepaint = Math.min(minRepaint, repaintW, repaintB);
  }
}

console.log(minRepaint);