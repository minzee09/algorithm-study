// 1. citations 배열을 내림차순으로 정렬한다.
//    - 이렇게 하면 인용수가 높은 논문부터 순서대로 배열된다.
// 2. 정렬된 배열을 순회하면서, 
//    - 현재 인덱스 i (0부터 시작)에 대해, 
//      i번째 논문의 인용수가 i+1 (논문 개수 조건) 이상인지 확인한다.
// 3. 만약 인용수가 i+1 미만이면, 그 시점이 H-Index의 최대값이 된다.
// 4. 모든 논문이 조건을 만족하면, H-Index는 전체 논문의 개수가 된다.

function solution(citations) {
    // 1. 배열을 내림차순 정렬
    citations.sort((a, b) => b - a);
    
    // 2. 순회하며 H-Index 조건 확인
    for (let i = 0; i < citations.length; i++) {
        // i번째 논문의 인용수가 i+1 미만이면 조건이 깨짐
        if (citations[i] < i + 1) {
            // 이전까지의 i값이 H-Index가 됨
            return i;
        }
    }
    
    // 3. 모든 논문이 조건을 만족하면, H-Index는 전체 논문의 개수이다.
    return citations.length;
}
