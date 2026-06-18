const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.

function solution(n){
    if(n===0) return;

    process.stdout.write("* ".repeat(n));
    process.stdout.write("\n");

    solution(n-1);
    
    process.stdout.write("* ".repeat(n));
    process.stdout.write("\n");
}

solution(n);