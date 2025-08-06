const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split('\n');

const nums = input[1].split(' ').map(Number);
const numsSorted = [...new Set(nums)].sort((a, b) => a - b); // set는 중복 제거

const map = new Map();
numsSorted.forEach((val, idx) => map.set(val, idx));

const result = nums.map(val => map.get(val));
console.log(result.join(' '));