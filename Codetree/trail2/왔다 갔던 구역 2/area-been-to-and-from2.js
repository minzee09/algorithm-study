const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const commands = input.slice(1);

const OFFSET = 10000;
const visited = Array(20001).fill(0);

let current = OFFSET;

for (let i = 0; i < n; i++) {
  const [distanceInput, direction] = commands[i].split(" ");
  const distance = Number(distanceInput);

  if (direction === "R") {
    // current부터 current + distance까지의 구간을 지나감
    for (let j = current; j < current + distance; j++) {
      visited[j]++;
    }

    current += distance;
  } else {
    // current - distance부터 current까지의 구간을 지나감
    for (let j = current - distance; j < current; j++) {
      visited[j]++;
    }

    current -= distance;
  }
}

let answer = 0;

for (const count of visited) {
  if (count >= 2) {
    answer++;
  }
}

console.log(answer);