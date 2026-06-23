const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please Write your code here.

function f(n){
    if(n===1) return 2;
    else if (n===2) return 4;
    
    return f(n-2) * f(n-1) % 100;
}

console.log(f(N));