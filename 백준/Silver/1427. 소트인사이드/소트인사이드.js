const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim();

const result = input.split('').sort((a, b) => b - a).join('');

console.log(result);
