const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b, c] = input[0].split(" ").map(Number);

// Please Write your code here.

function findNum(a,b,c){
    let current = a;
    if(current > b || current > c){
        if (b < c) current = b;
        else current = c;
    }
    return current;
}

let answer = findNum(a,b,c);
console.log(answer);