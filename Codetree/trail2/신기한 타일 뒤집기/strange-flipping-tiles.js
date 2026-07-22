const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);

// 좌표별 색상을 저장
// W: 흰색, B: 검은색
const tiles = new Map();

let current = 0;

for (let i = 1; i <= n; i++) {
    const [xValue, direction] = input[i].trim().split(" ");
    const x = Number(xValue);

    if (direction === "R") {
        // 현재 위치를 포함해 오른쪽으로 x칸
        for (let position = current; position < current + x; position++) {
            tiles.set(position, "B");
        }

        // 마지막으로 칠한 타일로 이동
        current += x - 1;
    } else {
        // 현재 위치를 포함해 왼쪽으로 x칸
        for (let position = current; position > current - x; position--) {
            tiles.set(position, "W");
        }

        // 마지막으로 칠한 타일로 이동
        current -= x - 1;
    }
}

let whiteCount = 0;
let blackCount = 0;

for (const color of tiles.values()) {
    if (color === "W") {
        whiteCount++;
    } else {
        blackCount++;
    }
}

console.log(whiteCount, blackCount);