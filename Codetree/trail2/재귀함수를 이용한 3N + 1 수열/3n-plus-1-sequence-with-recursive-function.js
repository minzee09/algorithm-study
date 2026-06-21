const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

// Please Write your code here.
function solution(n){
    if(n===1) return 0;
    if(n%2===0) return solution(n/2) + 1;
    else return solution((n*3)+1) + 1;
}

console.log(solution(n))