function solution(bridge_length, weight, truck_weights) {
    let time = 0;                  // 경과 시간
    let bridge = Array(bridge_length).fill(0);  // 다리 상태 (길이만큼 0으로 채움)
    let bridge_weight = 0;         // 현재 다리 위 총 무게

    while (truck_weights.length > 0 || bridge_weight > 0) {
        time++;  // 시간 경과

        // 다리에서 트럭 한 대 내리기
        bridge_weight -= bridge.shift();  // 다리 앞쪽 트럭 내리기

        // 대기 중인 트럭이 다리에 올라갈 수 있는지 확인
        if (truck_weights.length > 0) {
            if (bridge_weight + truck_weights[0] <= weight) {
                // 트럭을 다리에 올리기
                let truck = truck_weights.shift();
                bridge.push(truck);
                bridge_weight += truck;
            } else {
                // 무게 초과 → 빈 자리 유지
                bridge.push(0);
            }
        }
    }

    return time;  // 모든 트럭이 다리를 건너는 데 걸린 시간
}
