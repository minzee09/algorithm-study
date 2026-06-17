const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// Please Write your code here.
function divideEvenNum(arr){
    let answer = '';
    for(num of arr){
        if(num % 2 === 0) answer += num/2 + ' ';
        else answer += num + ' ';
    }
    console.log(answer);
}

divideEvenNum(arr)