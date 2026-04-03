function solution(brown, yellow) {
    const total = brown + yellow;
    
    // 조건 만족하려면 최소 세로 3이어야 함 (테두리 2 + 노란 1)
    for (let height = 3; height < total; height++){
        if (total % height !== 0) continue;
        
        const width = total / height;
        if(width < height) continue;
        
        if( (width-2) * (height-2) === yellow){
            return [width,height];
        }
    }
}