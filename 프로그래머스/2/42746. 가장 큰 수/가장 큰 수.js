function solution(numbers) {
    // 숫자를 문자열로 변환한 뒤, 정렬 기준을 정의
    numbers.sort((a, b) => {
        const strA = a.toString();
        const strB = b.toString();
        return (strB + strA) - (strA + strB);  // 큰 순서로 정렬
    });

    // 모든 숫자를 이어 붙인 후, 앞이 '0'인 경우 '0'만 반환
    const result = numbers.join('');
    return result[0] === '0' ? '0' : result;
}
