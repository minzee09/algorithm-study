function solution(num_str) {
    return num_str
        .split('') // 문자열을 각 문자로 분리
        .map(Number) // 각 문자를 숫자로 변환
        .reduce((sum, num) => sum + num, 0); // 숫자를 모두 더함
}
