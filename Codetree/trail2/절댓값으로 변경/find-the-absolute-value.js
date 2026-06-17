const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// Please Write your code here.
function solution(arr){
    let answer = '';
    for(let i = 0; i < n; i++){
        answer += Math.abs(arr[i]) + ' ';
    }
    console.log(answer)
}

solution(arr);