function solution(n) {
    var answer = [[]];
    for(let i = 0; i < n;i++){
        if(i > 0) answer.push([]); //이게 왜 필요해? -> answer = [[]]는 이미 첫 번째 빈 배열(즉, 첫 번째 행)을 가지고 시작함. 따라서 첫 번째 행은 초기화 상태로 존재하고 나머지 행을 추가할 때만 push
        for(let j = 0; j < n;j++){
            if(i == j) answer[i].push(1)
            else answer[i].push(0)
        }
    }
    return answer;
}