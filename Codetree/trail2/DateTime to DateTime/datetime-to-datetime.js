const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

// Please write your code here.
const startTime = (11*60)+11;
const result = (A-11)*24*60 + ((B*60+C) - startTime)
console.log(result < 0 ? -1 : result)