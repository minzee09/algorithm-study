const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const text = input[0];
const pattern = input[1];

// Please Write your code here.
function solution(){
    let answer = -1;
    for(let i = 0; i < text.length; i++){
        if(pattern[0] === text[i]){
            for(let j = 0; j < pattern.length; j++){
                if(pattern[j] !== text[i+j]) {
                    answer = -1;
                    break;
                }
                answer = i;
            }
        }
        if(answer >= 0){
            answer = i;
            return answer;
        }
    }
    return answer;
}

console.log(solution());