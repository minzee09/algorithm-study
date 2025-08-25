const input = require("fs").readFileSync(process.platform === 'linux' ? "/dev/stdin" : 'input.txt').toString().trim().split("\n");

const N = Number(input[0]);
const distances = input[1].split(" ").map(Number); // 도로 길이
const prices = input[2].split(" ").map(Number);    // 주유소 가격

let totalCost = 0;
let minPrice = prices[0]; // 시작 도시의 기름 가격

for (let i = 0; i < N - 1; i++) {
    // 현재 도시 가격보다 다음 도시 가격이 더 싸면 바꾸지 않고, 아니면 갱신
    if (prices[i] < minPrice) {
        minPrice = prices[i];
    }
    totalCost += minPrice * distances[i];
}

console.log(totalCost);
