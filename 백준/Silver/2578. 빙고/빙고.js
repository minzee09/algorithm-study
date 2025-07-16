const fs = require('fs');
const data = fs.readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(/\s+/)
  .map(Number);

const board = Array.from({ length: 5 }, (_, i) =>
  data.slice(i * 5, i * 5 + 5)
);
const calls = data.slice(25);

const pos = Array(26);
for (let r = 0; r < 5; r++) {
  for (let c = 0; c < 5; c++) {
    pos[board[r][c]] = [r, c];
  }
}

const marked = Array.from({ length: 5 }, () => Array(5).fill(false));

for (let i = 0; i < 25; i++) {
  const num = calls[i];
  const [r, c] = pos[num];
  marked[r][c] = true;

  let countBingo = 0;

  for (let row = 0; row < 5; row++) {
    if (marked[row].every(v => v)) countBingo++;
  }

  for (let col = 0; col < 5; col++) {
    let all = true;
    for (let row = 0; row < 5; row++) {
      if (!marked[row][col]) { all = false; break; }
    }
    if (all) countBingo++;
  }

  if ([0, 1, 2, 3, 4].every(d => marked[d][d])) countBingo++;
  if ([0, 1, 2, 3, 4].every(d => marked[d][4 - d])) countBingo++;

  if (countBingo >= 3) {
    console.log(i + 1);
    break;
  }
}
