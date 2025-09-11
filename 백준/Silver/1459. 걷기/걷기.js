const input = require("fs").readFileSync(process.platform === 'linux' ? "/dev/stdin" : "input.txt").toString().trim().split(/\s+/).map(Number);

const [X, Y, W, S] = input;

const x = Math.max(X, Y);
const y = Math.min(X, Y);
const d = x - y;

let ans;

if (S >= 2 * W) {
  ans = (X + Y) * W;
} else if (S >= W) {
  ans = y * S + d * W;
} else {
  if (d % 2 === 0) {
    ans = y * S + d * S;
  } else {
    ans = y * S + (d - 1) * S + W;
  }
}

console.log(ans.toString());
