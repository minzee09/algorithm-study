const fs = require('fs');
const [a, b] = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

// 1~10 카드가 각각 2장씩 있으므로, 인덱스 0~9 사용
const cards = Array(10).fill(2);
cards[a - 1]--;
cards[b - 1]--;

// 전체 남은 카드에서 두 장 뽑는 경우의 수: C(18,2) = 153
const total = 9 * 17; 

let win = 0;

if (a === b) {
  // 내가 땡(pair)을 가지고 있으면,
  // 상대가 i땡을 가질 때 i > a인 경우에만 내가 진다 (10–a 가지)
  // 따라서 전체에서 그만큼만 빼 주면 내가 이긴 횟수
  win = total - (10 - a);
} else {
  // 내가 끗(sum%10)을 가지고 있는 경우
  const myPoint = (a + b) % 10;

  // i<j 조합만 순회 (중복 없이)
  for (let i = 1; i <= 10; i++) {
    for (let j = i + 1; j <= 10; j++) {
      const oppPoint = (i + j) % 10;
      if (myPoint <= oppPoint) continue;  // 이기는 패만 계산

      // 실제 남아 있는 카드 수에 따라 경우의 수가 달라짐
      // - (i, j)가 둘 다 내 패일 땐 cards[i-1]=1, cards[j-1]=1 → 1×1 경우지만, 이 조합은 내 패라 애초에 continue
      // - 그 외에 i 또는 j 하나만 내 패일 땐 1×2 = 2가지
      // - 내 패와 상관 없으면 2×2 = 4가지
      if ((i === a && j === b) || (i === b && j === a)) {
        // 내 패와 완전히 일치하는 조합은 뽑힐 수 없으므로 건너뜀
        continue;
      } else if (i === a || i === b || j === a || j === b) {
        win += 2;
      } else {
        win += 4;
      }
    }
  }
}

console.log((win / total).toFixed(3));
