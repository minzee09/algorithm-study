const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1).map((line, i) => {
  const [x, y] = line.trim().split(' ').map(Number);

  return {
    index: i + 1,
    x,
    y,
    dist: Math.abs(x) + Math.abs(y)
  };
});

points.sort((a, b) => {
  if (a.dist !== b.dist) {
    return a.dist - b.dist;
  }

  return a.index - b.index;
});

points.forEach(point => {
  console.log(point.index);
});