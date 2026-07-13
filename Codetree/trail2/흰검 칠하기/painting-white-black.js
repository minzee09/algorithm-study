const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map((line) => {
  const [value, direction] = line.split(' ');
  return [Number(value), direction];
});

const arr = Array.from({ length: 200001 }, () => ({
  whiteCount: 0,
  blackCount: 0,
  color: null,
}));

let curr = 100000;

for (let commandIndex = 0; commandIndex < n; commandIndex++) {
  const [value, direction] = commands[commandIndex];

  if (direction === 'R') {
    for (let position = curr; position < curr + value; position++) {
      arr[position].blackCount++;
      arr[position].color = 'b';
    }

    curr += value - 1;
  } else {
    for (let position = curr; position > curr - value; position--) {
      arr[position].whiteCount++;
      arr[position].color = 'w';
    }

    curr -= value - 1;
  }
}

const answer = {
  white: 0,
  black: 0,
  grey: 0,
};

for (let i = 0; i < arr.length; i++) {
  if (arr[i].whiteCount >= 2 && arr[i].blackCount >= 2) {
    answer.grey++;
  } else if (arr[i].color === 'w') {
    answer.white++;
  } else if (arr[i].color === 'b') {
    answer.black++;
  }
}

console.log(answer.white, answer.black, answer.grey);