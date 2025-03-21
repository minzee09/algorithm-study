function solution(data, col, row_begin, row_end) {
    // 1. 정렬: col번째 컬럼 기준 오름차순, 동일하면 첫 번째 컬럼 기준 내림차순
    data.sort((a, b) => {
        if (a[col - 1] === b[col - 1]) {
            return b[0] - a[0];  // 첫 번째 컬럼 기준 내림차순
        }
        return a[col - 1] - b[col - 1];  // col번째 컬럼 기준 오름차순
    });

    let result = 0;

    // 2. S_i 계산 및 XOR 연산
    for (let i = row_begin - 1; i < row_end; i++) {  // row_begin-1부터 row_end-1까지
        let sum = 0;
        for (let j = 0; j < data[i].length; j++) {
            sum += data[i][j] % (i + 1);  // i는 0-based index이므로 i+1로 나누기
        }
        result ^= sum;  // XOR 연산
    }

    return result;
}
