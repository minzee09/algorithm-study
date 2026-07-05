const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryStr = input[0];

// Please Write your code here.
let answer = 0;
binaryStr.split('').reverse().forEach((n,i) => {
    answer += n * Math.pow(2,i);
})

console.log(answer);