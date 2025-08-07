const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split('\n');

const nums = input[1].split('').map(Number);

console.log(nums.reduce((a,b) => a + b))