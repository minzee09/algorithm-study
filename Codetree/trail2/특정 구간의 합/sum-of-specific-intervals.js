const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const queries = input.slice(2).map(line => line.split(" ").map(Number));

// Please write your code here.
function solution(){
    for(nums of queries){
        let answer = 0;
        for(let i = nums[0] - 1; i <= nums[1]-1; i++){
            answer += A[i];
        }
        console.log(answer);
    }
}

solution();