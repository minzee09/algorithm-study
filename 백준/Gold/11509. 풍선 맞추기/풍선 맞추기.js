const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/).map(Number);

const n = input[0];
const arr = input.slice(1);

const arrows = new Map(); // 각 높이에 남아있는 화살 개수
let result = 0;

for (let h of arr) {
  if (arrows.get(h) > 0) {
    // h 높이에 화살이 있으면 풍선 터뜨리고 화살은 h-1로 이동
    arrows.set(h, arrows.get(h) - 1);
    arrows.set(h - 1, (arrows.get(h - 1) || 0) + 1);
  } else {
    // 없으면 새로운 화살 필요
    result++;
    arrows.set(h - 1, (arrows.get(h - 1) || 0) + 1);
  }
}

console.log(result);
