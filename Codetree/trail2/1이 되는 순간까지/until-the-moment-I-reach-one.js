const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.
let count = 0;
function solution(n){
    if(n===1) return count;
    count++;
    if(n%2===0){
      return solution(n/2)  
    } else return solution(parseInt(n/3))
}

console.log(solution(n))