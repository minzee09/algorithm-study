const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
// Please Write your code here.

function solution(A){
    const letters = new Set();

    for(i of A){
        if(!letters.has(i)) letters.add(i);
    }

    return letters.size;
}

let answer = solution(A);
if(answer >= 2) console.log('Yes');
else console.log('No');