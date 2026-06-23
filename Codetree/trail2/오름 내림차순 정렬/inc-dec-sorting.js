const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const nums = input[1].split(' ').map(Number);

// Please Write your code here.
console.log(nums.sort((a,b)=> a-b).join(' '));
console.log(nums.sort((a,b)=> b-a).join(' '));