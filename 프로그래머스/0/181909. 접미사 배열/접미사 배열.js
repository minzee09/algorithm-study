function solution(my_string) {
    const suffixes = [];
    for (let i = 0; i < my_string.length; i++) {
        suffixes.push(my_string.slice(i)); // i번째 인덱스부터 끝까지 잘라서 배열에 추가
    }
    return suffixes.sort(); // 사전순으로 정렬
}
