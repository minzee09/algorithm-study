const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const uniqueArr = Array.from(new Set(arr)).sort((a, b) => a - b);

const coordMap = new Map();
uniqueArr.forEach((value, index) => {
  coordMap.set(value, index);
});

const result = arr.map(value => coordMap.get(value));
console.log(result.join(' '));
