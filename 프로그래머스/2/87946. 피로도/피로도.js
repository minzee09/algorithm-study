function solution(k, dungeons) {
  const n = dungeons.length;
  // 던전 인덱스 배열 생성: [0, 1, 2, ..., n-1]
  let order = Array.from({ length: n }, (_, i) => i);
  let answer = 0;
  
  // 현재 순열 order에 대해 던전 탐험 시뮬레이션
  do {
    let currentFatigue = k;
    let count = 0;
    
    for (let i = 0; i < n; i++) {
      const dungeonIndex = order[i];
      const [minRequired, fatigueCost] = dungeons[dungeonIndex];
      if (currentFatigue >= minRequired) {
        currentFatigue -= fatigueCost;
        count++;
      } else {
        break; // 해당 순서에서 더 이상 진행할 수 없으면 종료
      }
    }
    
    answer = Math.max(answer, count);
  } while (nextPermutation(order));
  
  return answer;
}

// 다음 순열(next permutation) 알고리즘
function nextPermutation(arr) {
  // 1. 뒤쪽부터 내려가며 증가하는 부분의 시작 인덱스(i-1)를 찾습니다.
  let i = arr.length - 1;
  while (i > 0 && arr[i - 1] >= arr[i]) {
    i--;
  }
  
  // 이미 가장 큰 순열이면 false 반환
  if (i <= 0) return false;
  
  // 2. arr[i-1]보다 큰 원소 중 가장 작은 원소의 인덱스(j)를 찾습니다.
  let j = arr.length - 1;
  while (arr[j] <= arr[i - 1]) {
    j--;
  }
  // 3. arr[i-1]와 arr[j]를 교환합니다.
  [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
  
  // 4. i번째부터 끝까지의 부분 배열을 오름차순으로 정렬(역순으로 뒤집기)
  let left = i, right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  
  return true;
}
