const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const y = Number(input[0]);
// Please Write your code here.

function isLeapYear(num){
  if(num % 4 === 0){
    if(num % 100 === 0 && num % 400 !== 0) return false;
    return true;

  } else return false;
}

console.log(isLeapYear(y))