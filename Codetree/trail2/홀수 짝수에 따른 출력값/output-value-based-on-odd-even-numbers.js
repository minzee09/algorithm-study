const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.
function solution(n){
    if (n === 2) return 2;
    else if(n===1) return 1;
    return solution(n-2) + n;
}

console.log(solution(n));