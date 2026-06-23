const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

// 최대공약수 - 재귀
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

// 두 수의 최소공배수
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// 배열의 최소공배수 - 재귀
function findLCM(index) {
    if (index === n - 1) {
        return numbers[index];
    }

    return lcm(numbers[index], findLCM(index + 1));
}

console.log(findLCM(0));