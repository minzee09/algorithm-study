const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const students = input.slice(1).map(line => {
  const [name, korean, english, math] = line.split(' ');
  return { name, korean: Number(korean), english: Number(english), math: Number(math) };
});

students.sort((a, b) => {
  // 국어 점수가 감소하는 순서
  if (a.korean !== b.korean) return b.korean - a.korean;
  // 국어 점수가 같으면 영어 점수가 증가하는 순서
  if (a.english !== b.english) return a.english - b.english;
  // 국어와 영어 점수가 같으면 수학 점수가 감소하는 순서
  if (a.math !== b.math) return b.math - a.math;
  // 모든 점수가 같으면 이름순으로 증가하는 순서
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});

const result = students.map(student => student.name).join('\n');
console.log(result);
