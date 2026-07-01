const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

// Please write your code here.
const result = (A * 24 * 60 + B * 60 + C) - (11 * 24 * 60 + 11 * 60 + 11);
console.log(result < 0 ? -1 : result)