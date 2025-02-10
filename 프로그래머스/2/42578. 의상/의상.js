function solution(clothes) {
    const clothesMap = new Map();

    // 의상 종류별로 개수 저장
    for (let [name, type] of clothes) {
        clothesMap.set(type, (clothesMap.get(type) || 0) + 1);
    }

    // 각 의상 종류의 (개수 + 1)을 곱한 후, 아무것도 입지 않은 경우(1)를 뺌
    let combinations = 1;
    for (let count of clothesMap.values()) {
        combinations *= (count + 1);
    }

    return combinations - 1;
}
