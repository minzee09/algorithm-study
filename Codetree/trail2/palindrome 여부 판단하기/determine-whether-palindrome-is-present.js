const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0];
// Please Write your code here.

function isReverable(str){
    let answer = '';
    str === str.split('').reverse().join('') ? answer = 'Yes' : answer = 'No';
    return answer;
}

console.log(isReverable(str))