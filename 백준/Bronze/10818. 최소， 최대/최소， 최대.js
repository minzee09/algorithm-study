const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split('\n');

const num = input[1].split(' ').map(Number).sort((a,b) => a-b);
console.log(num[0],num[num.length-1]);