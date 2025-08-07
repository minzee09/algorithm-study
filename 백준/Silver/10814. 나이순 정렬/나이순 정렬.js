const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split('\n');

const N = Number(input[0]);

const users = input.slice(1).map((line, idx) => {
    const [age, name] = line.split(' ');
    return { age: Number(age), name, index: idx };
});

users.sort((a, b) => {
    if (a.age !== b.age) return a.age - b.age;
    return a.index - b.index; // 입력 순서 유지하기 위해
});

let answer = '';
for (let user of users) {
    answer += `${user.age} ${user.name}\n`;
}

console.log(answer.trim());