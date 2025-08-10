const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split('\n');

console.log(input.slice(1).sort((a,b) => a-b).join('\n'));