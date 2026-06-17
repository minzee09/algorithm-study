const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m, d] = input[0].split(" ").map(Number);

// Please Write your code here.
function hasDate(m,d){
    let date30 = [4,6,9,11];
    let date31 = [1,3,5,7,8,10,12];
    if(m === 2 && d <= 28) return "Yes"; 
    else if((date30.includes(m) && d <= 30) || (date31.includes(m) && d <= 31)) return "Yes";
    else return "No";
}

console.log(hasDate(m,d))