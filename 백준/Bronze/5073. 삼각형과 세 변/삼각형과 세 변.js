const input = require("fs").readFileSync(0, "utf8").trim().split("\n");

let out = [];
for (const line of input) {
  if (!line.trim()) continue;
  const [a, b, c] = line.trim().split(/\s+/).map(Number);

  if (a === 0 && b === 0 && c === 0) break;

  // 삼각형 조건: 가장 긴 변 < 나머지 두 변의 합
  const sides = [a, b, c].sort((x, y) => x - y);
  const [x, y, z] = sides;

  if (x + y <= z) {
    out.push("Invalid");
    continue;
  }

  if (a === b && b === c) out.push("Equilateral");
  else if (a === b || b === c || a === c) out.push("Isosceles");
  else out.push("Scalene");
}

console.log(out.join("\n"));
