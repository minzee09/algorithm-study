const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(" ").map(Number);

// Please Write your code here.

function isWholeNumber(num){
    if(num % 2 === 0 || num % 10 === 5 || (num % 3 === 0 && num % 9 !== 0)) return false;
    return true;
}

let answer = 0;
for(let i = a; i <= b; i++){
    if(isWholeNumber(i)) answer++;
}

console.log(answer);