function solution(triangle) {
    let n = triangle.length;
    let dp = Array.from(Array(n), (_, i) => [...triangle[i]]); // 원본을 유지하는 DP 배열

    for (let i = n - 2; i >= 0; i--) { // 아래에서 위로
        for (let j = 0; j <= i; j++) { // j는 0부터 i까지 (각 행의 크기만큼)
            dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]); // 최적 경로 선택
        }
    }

    return dp[0][0]; // 꼭대기의 최댓값 반환
}

/*
아래에서 위로 계산

-> 맨 아래 행부터 위로 올라가며 최대값을 누적 저장
-> triangle[i][j]는 triangle[i+1][j] 또는 triangle[i+1][j+1]에서 더 큰 값을 선택하여 합산

메모이제이션 활용

-> 각 위치에서 최적의 선택을 저장해두고 재활용하여 연산을 줄임
*/