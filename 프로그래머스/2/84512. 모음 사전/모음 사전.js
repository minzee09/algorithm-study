function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U']; // 사용할 수 있는 모음 배열
    let count = 0; // 몇 번째 단어인지 세기 위한 카운터
    let result = 0; // 결과를 저장할 변수

    // 깊이 우선 탐색(DFS) 함수
    const dfs = (current) => {
        if (current === word) { // 찾고자 하는 단어와 일치하면
            result = count; // 현재 카운트를 결과로 저장하고
            return true; // 탐색을 종료
        }
        if (current.length >= 5) return false; // 단어 길이가 5를 초과하면 종료

        for (let i = 0; i < vowels.length; i++) { // 각 모음에 대해 반복
            count++; // 단어를 생성할 때마다 카운트 증가
            if (dfs(current + vowels[i])) return true; // 다음 단계로 탐색 진행
        }

        return false;
    };

    dfs(''); // DFS 탐색을 빈 문자열에서 시작

    return result;
}
