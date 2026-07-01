const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].split(' ').map(Number);

const arr = nums.map((value, i) => {
  return {
    value,
    index: i
  };
});

arr.sort((a, b) => {
  if (a.value === b.value) {
    return a.index - b.index;
  }
  return a.value - b.value;
});

const answer = Array(n);

arr.forEach((item, sortedIndex) => {
  answer[item.index] = sortedIndex + 1;
});

console.log(answer.join(' '));