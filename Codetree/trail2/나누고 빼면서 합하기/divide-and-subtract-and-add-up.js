const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
// Please Write your code here.

function solution(){
    let answer = A[0];
    while(m !== 1){
        answer += A[m-1];
        if(m % 2 === 0) m /= 2;
        else m -= 1;
    }

    return answer;
}

console.log(solution())