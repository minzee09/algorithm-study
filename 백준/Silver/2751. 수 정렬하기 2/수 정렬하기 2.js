const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

const numbers = input.map(Number);
numbers.sort((a, b) => a - b);
console.log(numbers.join('\n'));
