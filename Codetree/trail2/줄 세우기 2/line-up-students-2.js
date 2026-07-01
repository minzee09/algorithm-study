const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const studentInputs = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(' ').map(Number);
    studentInputs.push({height, weight, index:i});
}

// Please Write your code here.
studentInputs.sort((a,b) => {
    if(a.height === b.height){
        return b.weight - a.weight
    }
    return a.height - b.height;
})

studentInputs.forEach(n => {
    console.log(n.height, n.weight, n.index)
})