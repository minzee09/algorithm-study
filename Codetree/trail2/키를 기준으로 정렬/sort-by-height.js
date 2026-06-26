const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const studentsInput = [];
for (let i = 1; i <= n; i++) {
    studentsInput.push(input[i].split(' '));
}
// Please Write your code here.
class Student{
    constructor(name, height, weight){
        this.name = name;
        this.height = height;
        this.weight = weight
    }
}

const students = [];

for(let s of studentsInput){
    students.push(new Student(s[0], s[1], s[2]));
}

students.sort((prev,curr) => prev.height - curr.height);

students.forEach(n => {
    console.log(n.name, n.height, n.weight);
})