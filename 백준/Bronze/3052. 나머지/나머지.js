const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split('\n').map(n => Number(n%42));

const set = new Set(input);
console.log(set.size);