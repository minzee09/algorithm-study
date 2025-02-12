function solution(scoville, K) {
    const heap = [];
    
    // 힙에 값 추가
    function push(val) {
        heap.push(val);
        let idx = heap.length - 1;
        while (idx > 0) {
            const parent = Math.floor((idx - 1) / 2);
            if (heap[parent] <= heap[idx]) break;
            [heap[parent], heap[idx]] = [heap[idx], heap[parent]];
            idx = parent;
        }
    }
    
    // 힙에서 최소값 제거 및 반환
    function pop() {
        if (heap.length === 1) return heap.pop();
        const min = heap[0];
        heap[0] = heap.pop();
        let idx = 0;
        while (true) {
            const left = idx * 2 + 1;
            const right = idx * 2 + 2;
            let smallest = idx;
            
            if (left < heap.length && heap[left] < heap[smallest]) smallest = left;
            if (right < heap.length && heap[right] < heap[smallest]) smallest = right;
            if (smallest === idx) break;
            
            [heap[idx], heap[smallest]] = [heap[smallest], heap[idx]];
            idx = smallest;
        }
        return min;
    }
    
    // 초기 힙 구성
    scoville.forEach(push);
    
    let mixCount = 0;
    
    while (heap[0] < K) {
        if (heap.length < 2) return -1;
        
        const first = pop();
        const second = pop();
        const newScoville = first + (second * 2);
        
        push(newScoville);
        mixCount++;
    }
    
    return mixCount;
}
