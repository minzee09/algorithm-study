const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split(' ');

const num1 = input[0].split('').reverse().join('');
const num2 = input[1].split('').reverse().join('');

console.log(Math.max(num1,num2))