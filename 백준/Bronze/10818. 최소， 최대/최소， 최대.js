const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split('\n');

const num = input[1].split(' ').map(Number);
console.log(Math.min(...num),Math.max(...num));