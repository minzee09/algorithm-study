const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function numChange(num){
    let result = 0;
    for(let i = 1; i <= num; i++){
        result += i;
    }
    return parseInt(result/10);
}

console.log(numChange(n));