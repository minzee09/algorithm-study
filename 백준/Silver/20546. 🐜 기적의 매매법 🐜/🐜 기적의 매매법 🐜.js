const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split('\n');

const money = Number(input[0]);
const stock = input[1].split(' ').map(Number);

// BNP
let bnpMoney = money;
let bnpCount = 0;

for (let price of stock){
  const buy = Math.floor(bnpMoney / price);
  bnpCount += buy;
  bnpMoney -= buy * price;
}

// TIMING
let timingMoney = money;
let timingCount = 0;
let up = 0;
let down = 0;
let prev = stock[0];

for (let i = 1; i < stock.length; i++) {
  const price = stock[i];

  if (price > prev) {
    up++;
    down = 0;
  } else if (price < prev) {
    down++;
    up = 0;
  } else {
    up = 0;
    down = 0;
  }

  if (up >= 3) {
    // 3일 연속 상승 → 전량 매도
    timingMoney += timingCount * price;
    timingCount = 0;
  } else if (down >= 3) {
    // 3일 연속 하락 → 전량 매수
    const buy = Math.floor(timingMoney / price);
    timingCount += buy;
    timingMoney -= buy * price;
  }

  prev = price;
}

const lastPrice = stock[stock.length - 1];
const bnpAsset = bnpMoney + bnpCount * lastPrice;
const tmAsset = timingMoney + timingCount * lastPrice;


if (bnpAsset > tmAsset) console.log('BNP');
else if (bnpAsset < tmAsset) console.log('TIMING');
else console.log('SAMESAME');