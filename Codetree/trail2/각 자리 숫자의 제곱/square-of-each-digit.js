const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

// Please Write your code here.
function solution(n){
    if(n < 10) return n**2;

    return solution(parseInt(n / 10)) + (n % 10)**2;
}

console.log(solution(n));