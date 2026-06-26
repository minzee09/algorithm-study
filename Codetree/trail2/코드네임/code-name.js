const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

const codenames = [];
const scores = [];

for (let i = 0; i < input.length; i++) {
    const [codename, score] = input[i].split(' ');
    
    codenames.push(codename);
    scores.push(parseInt(score, 10));
}

// Please Write your code here.
class Code{
    constructor(codename = '', score = 0){
        this.codename = codename;
        this.score = score;
    }
}

const code = [];

for(let i = 0; i < input.length; i++){
    code.push(new Code(codenames[i], scores[i]));
}

let minInfo = {
    score: Infinity,
    codename: '',
};

for (let c of code) {
    if (minInfo.score > c.score){
        minInfo.score = c.score;
        minInfo.codename = c.codename;

    }
}

console.log(minInfo.codename, minInfo.score)