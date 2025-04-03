const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const k = Number(input[2]);

// 전체 병합 단계 중 현재까지 진행한 단계 수 = log2(N/k)
const rounds = Math.log2(N / k);
let groupSize = 1;

// rounds 만큼 각 병합 단계 수행
for (let r = 0; r < rounds; r++) {
  for (let i = 0; i < N; i += groupSize * 2) {
    // 인접한 두 그룹(groupSize * 2 크기)을 잘라내어 sort()를 사용해 정렬
    let segment = arr.slice(i, i + groupSize * 2);
    segment.sort((a, b) => a - b);
    // 정렬된 segment를 원래 배열에 덮어씀
    for (let j = 0; j < segment.length; j++) {
      arr[i + j] = segment[j];
    }
  }
  groupSize *= 2;
}

// 결과 출력: 현재 단계 완료된 배열 상태
console.log(arr.join(' '));
