const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

class Student{
    constructor(height, weight, index){
        this.height = height;
        this.weight = weight;
        this.index = index;
    }
}

const n = Number(input[0]);
const students = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(" ").map(Number);
    students.push(new Student(height, weight, i));
}

// Please Write your code here.
function cmp(a,b){
    if(a.height === b.height){
        if(a.weight === b.weight){
            return a.index - b.index;
        }
        return b.weight - a.weight;
    }
    return b.height - a.height;
}

students.sort(cmp);

students.forEach(n=> console.log(n.height, n.weight, n.index))