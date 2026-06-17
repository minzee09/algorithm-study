const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// Please Write your code here.
function solution(arr){
    for(let i = 0; i < n; i++){
        arr[i]= Math.abs(arr[i]);
    }
}

solution(arr);
console.log(arr.join(' '));