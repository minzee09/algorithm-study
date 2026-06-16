const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);
// Please Write your code here.
let answer = '';

switch(o){
    case "*": {
        answer = `${a} ${o} ${c} = ${a*c}`;
        break;
    }
    case "+": {
        answer = `${a} ${o} ${c} = ${a+c}`;
        break;
    }   
    case "-": {
        answer = `${a} ${o} ${c} = ${a-c}`;
        break;
    } 
    case "/": {
        answer = `${a} ${o} ${c} = ${parseInt(a/c)}`;
        break;
    } 
    default: answer = 'False'; 
}

console.log(answer);