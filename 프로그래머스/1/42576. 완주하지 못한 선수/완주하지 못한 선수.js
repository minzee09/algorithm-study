// 1. participant 배열에서 각 선수 이름의 등장 횟수를 저장할 해시(=객체)를 만든다.
// 2. completion 배열을 순회하면서 해당 선수의 등장 횟수를 해시에서 감소시킨다.
// 3. 해시에서 값이 0보다 큰(==완주하지 못한) 선수 이름을 찾아 반환한다.

function solution(participant, completion) {
    
    // 1) 참가자들의 이름과 등장 횟수를 저장
    const counts = {};
    participant.forEach(name => {
        counts[name] = (counts[name] || 0) + 1;
    });
    
    // 2) 완주자들의 이름에 해당하는 count 값을 감소
    completion.forEach(name => {
        counts[name]--;
    });
    
    // 3) count가 0보다 큰 선수, 즉 완주하지 못한 선수를 반환
    for (let name in counts) {
        if (counts[name] > 0) {
            return name;
        }
    }
}
