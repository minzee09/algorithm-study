const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
const points = input.slice(1).map(line => line.split(' ').map(Number));

points.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  return a[1] - b[1];
});

console.log(points.map(p => p.join(' ')).join('\n'));
