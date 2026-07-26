const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const OFFSET = 100;
const SIZE = 201;

// 직사각형이 칠해진 영역인지 저장
const grid = Array.from({ length: SIZE }, () => Array(SIZE).fill(false));

for (let i = 1; i <= n; i++) {
    let [x1, y1, x2, y2] = input[i].split(" ").map(Number);

    // 음수 좌표를 배열 인덱스로 사용하기 위한 보정
    x1 += OFFSET;
    y1 += OFFSET;
    x2 += OFFSET;
    y2 += OFFSET;

    // 직사각형이 차지하는 1 × 1 칸을 표시
    for (let x = x1; x < x2; x++) {
        for (let y = y1; y < y2; y++) {
            grid[x][y] = true;
        }
    }
}

let area = 0;

// 한 번이라도 칠해진 칸의 개수를 계산
for (let x = 0; x < SIZE; x++) {
    for (let y = 0; y < SIZE; y++) {
        if (grid[x][y]) {
            area++;
        }
    }
}

console.log(area);