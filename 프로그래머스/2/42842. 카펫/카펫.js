function solution(brown, yellow) {
    const total = brown + yellow;
    
    // height는 최소 3부터 시작 (테두리 1줄 때문에)
    for (let height = 3; height <= total; height++) {
        if (total % height === 0) {  // height가 약수라면
            const width = total / height;
            // width가 height보다 작으면 continue (문제 조건: width >= height)
            if (width < height) continue;
            
            // 내부 yellow 영역 확인
            if ((width - 2) * (height - 2) === yellow) {
                return [width, height];
            }
        }
    }
    
    return [];  // 조건에 맞는 값이 없는 경우
}
