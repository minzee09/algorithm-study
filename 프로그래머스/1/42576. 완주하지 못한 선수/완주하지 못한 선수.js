function solution(participant, completion) {
    // 해시 맵 생성
    const participantMap = new Map();

    // 참가자 배열을 순회하며 해시 맵에 이름과 횟수를 저장
    for (const name of participant) {
        participantMap.set(name, (participantMap.get(name) || 0) + 1);
    }

    // 완주자 배열을 순회하며 해시 맵에서 횟수를 감소
    for (const name of completion) {
        participantMap.set(name, participantMap.get(name) - 1);
    }

    // 해시 맵에서 값이 1인 이름을 반환 (완주하지 못한 사람)
    for (const [name, count] of participantMap) {
        if (count > 0) {
            return name;
        }
    }
}