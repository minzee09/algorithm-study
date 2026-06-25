const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
function f(n){
    let sort = arr.slice(0,n).sort((a,b)=>a-b);
    if(n===1) return sort[n-1];
    else return f(n-2)+ ' ' + sort[parseInt(n/2)];
}

console.log(f(n));