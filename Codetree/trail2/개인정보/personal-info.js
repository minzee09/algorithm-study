const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

class Student{
    constructor(name, height, weight){
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

const students = [];
for (let i = 0; i < 5; i++) {
  const [name, heightStr, weightStr] = input[i].split(' ');
  const height = Number(heightStr);
  const weight = Number(weightStr);
  students.push(new Student(name, height, weight));
}

// Please Write your code here.
students.sort((a,b) => a.name.localeCompare(b.name));
console.log('name');
students.forEach(n => console.log(n.name, n.height, n.weight.toFixed(1)));

students.sort((a,b) => b.height - a.height);
console.log('\nheight');
students.forEach(n => console.log(n.name, n.height, n.weight.toFixed(1)));
